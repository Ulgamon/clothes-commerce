import { Outlet, Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg"
import "./navigation.styles.jsx";
import UserContext from "../../contexts/user.context";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartContext from "../../contexts/cart.context";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles.jsx";

const Navigation = () => {

    const userCtx = useContext(UserContext);
    const cartCtx = useContext(CartContext);

    const signOutHandler = () => {
        signOutUser();
        userCtx.setCurrentUser(null);
    }

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <img src={CrwnLogo} className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {
                        userCtx.currentUser ? 
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                            : <NavLink className="nav-link" to="/auth">SIGN IN</NavLink>
                    }
                    <CartIcon onClick={cartCtx.toggleDropdown}/>
                </NavLinksContainer>
                {cartCtx.showDropdown && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation;