import './product-card.styles.jsx';
import { useContext } from 'react';
import CartContext from '../../contexts/cart.context';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { ProductCardContainer, Footer, ProductButton, ProductImage, ProductName, ProductPrice } from './product-card.styles.jsx';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {

    const {name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

    return (
        <ProductCardContainer>
            <ProductImage src={imageUrl} alt={name} />
            <Footer>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </Footer>
            <ProductButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addItemToCart(product)}>Add to cart</ProductButton>
        </ProductCardContainer>
    )
}

export default ProductCard; 