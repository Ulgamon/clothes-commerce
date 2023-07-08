import { CartItemContainer, CartImage, ItemDetails, NameSpan } from "./cart-item.styles";

const CartItem = ({cartItem}) => {

    const {name, imageUrl, quantity, price} = cartItem;

    return (
        <CartItemContainer>
            <CartImage src={imageUrl} alt={name} />
            <ItemDetails>
                <NameSpan>{name}</NameSpan>
                <NameSpan>{quantity} x ${price}</NameSpan>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;