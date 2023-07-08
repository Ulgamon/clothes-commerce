import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import CartContext from "../../contexts/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, CartItems, EmptyMessage, DropdownButton } from './cart-dropdown.styles';


const CartDropdown = () => {

    const { cartItems, toggleDropdown } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        toggleDropdown();
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length > 0 ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />) 
                    : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <DropdownButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</DropdownButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown; 