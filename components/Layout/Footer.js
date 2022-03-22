import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <footer>
            <div className="footer-contact">
                <p>info@tienda.com</p>
                <p>(504) 9999-8888</p>
                <p>(504) 9922-1100</p>
            </div>
            <div className="social-links">
                <a href='https://www.instagram.com/' target="__blank">
                    <i><FontAwesomeIcon icon={faInstagram}/></i>
                </a>
                <a href='https://www.facebook.com/' target="__blank">
                    <i><FontAwesomeIcon icon={faFacebook}/></i>
                </a>
            </div>
            <span className='copyright'>Copyright &copy; 2022</span>
        </footer>
    );
}

export default Footer;