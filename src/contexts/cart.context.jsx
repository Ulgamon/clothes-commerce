import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const index = cartItems.findIndex(element => element.id === productToAdd.id);
    console.log(index + 'index');
    // if found increment quantity
    if (index >= 0) {
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
    cartCount: 0,
});

export const CartContextProvider = ({children}) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(currentCartItems => addCartItem(currentCartItems, productToAdd));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    const toggleDropdown = () => {
        setShowDropdown(prevState => !prevState);
    };

    const value = {
        showDropdown,
        toggleDropdown,
        cartItems,
        addItemToCart,
        cartCount,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;