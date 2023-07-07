import { Outlet, Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg"
import "./navigation.styles.scss";
import UserContext from "../../contexts/user.context";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartContext from "../../contexts/cart.context";

const Navigation = () => {

    const userCtx = useContext(UserContext);
    const cartCtx = useContext(CartContext);

    const signOutHandler = () => {
        signOutUser();
        userCtx.setCurrentUser(null);
    }

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img src={CrwnLogo} className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {
                        userCtx.currentUser ? 
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                            : <Link className="nav-link" to="/auth">SIGN IN</Link>
                    }
                    <CartIcon onClick={cartCtx.toggleDropdown}/>
                </div>
                {cartCtx.showDropdown && <CartDropdown />}
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;