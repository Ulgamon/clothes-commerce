import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const index = cartItems.findIndex(element => element.id === productToAdd.id);
    // if found increment quantity
    if (parseInt(index) >= 0) {
        const item = cartItems[index];
        const newArray = [...cartItems];

        newArray[index] = {...item, quantity: item.quantity++}

        return newArray;
    }
    // return new array with modified  cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const CartContext = createContext({
    showDropdown: false,
    toggleDropdown: () => {},
    cartItems: [],
    addItemToCart: (productToAdd) => {},
    decrement: (productToDecrement) => {},
    removeItemFromCart: (productToRemove) => {},
    total: 0,
    cartCount: 0,
});

export const CartContextProvider = ({children}) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(currentCartItems => addCartItem(currentCartItems, productToAdd));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartCount(newCartCount);
        setTotal(newTotal);
    }, [cartItems])

    const toggleDropdown = () => {
        setShowDropdown(prevState => !prevState);
    };

    const decrement = (productToDecrement) => {
        const itemToDecrement = cartItems.find(item => item.id === productToDecrement.id);

        if (itemToDecrement && itemToDecrement.quantity > 1) {
            setCartItems(currentCartItems => currentCartItems.map(item => item.id === itemToDecrement.id 
                ? {...item, quantity: item.quantity-- } 
                : item));
        }
        else if (itemToDecrement && itemToDecrement.quantity === 1) {
            removeItemFromCart(itemToDecrement);
        }
    };

    const removeItemFromCart = (productToRemove) => {
        setCartItems(currentCartItems => currentCartItems.filter(item => item.id !== productToRemove.id));
    }

    const value = {
        showDropdown,
        toggleDropdown,
        cartItems,
        addItemToCart,
        decrement,
        removeItemFromCart,
        total,
        cartCount,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;