import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <>
            <Head>
                <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
            </Head>
            <nav>
                <div className='logo'>
                    <h4>CompuTech</h4>
                </div>
                <label htmlFor='btn-Menu' className='icon'>
                    <FontAwesomeIcon icon={faBars} size='2x'/>
                </label>
                <input id='btn-Menu' type="checkbox"/>
                <ul>
                    <li><Link href="/"><a>Inicio</a></Link></li>
<<<<<<< HEAD:components/Layout/Navbar.js
                    <li><Link href="/Tours/"><a>Tienda</a></Link></li>
                    <li><Link href="/producto/"><a>Producto</a></Link></li>
=======
                    <li><Link href="/Categorias/"><a>Categorias</a></Link></li>
>>>>>>> c11ada9d834b0bbc5ff37d98159e1938741e93a7:components/Navbar.js
                    <li><Link href="/Tours/"><a>Iniciar Sesion</a></Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;