import './cart-icon.styles.scss';
import svgIcon from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import CartContext from '../../contexts/cart.context';

const CartIcon = ({onClick}) => {
    const { cartCount } = useContext(CartContext);

    return (
        <div onClick={onClick} className='cart-icon-container'>
            <img src={svgIcon} className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}


export default CartIcon;