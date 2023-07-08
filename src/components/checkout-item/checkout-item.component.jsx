import { useContext } from "react";
import CartContext from "../../contexts/cart.context";
import { CheckoutItemContainer, Arrow, Image, ImageContainer, Name, Price, Quantity, RemoveButton, Value } from "./checkout-item.styles";

const CheckoutItem = ({cartItem}) => {
    const { removeItemFromCart, addItemToCart, decrement } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={() => decrement(cartItem)}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={() => removeItemFromCart(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;