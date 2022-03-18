import Cart from "../Cart";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <Cart/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;