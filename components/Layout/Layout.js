import CartIcon from "../ShoppingCart/CartIcon";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <CartIcon/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;