import CartIcon from "../ShoppingCart/CartIcon";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import { UserContext } from "../../utils/UserContext";

const Layout = ({children}) => {
    const {user} = useContext(UserContext);

    return (
        <div>
            <Navbar/>
            {user && <CartIcon/>}
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;