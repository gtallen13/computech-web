import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'

const Navbar = () => {
    const {data, revalidate} = useSWR('../pages/api/me', async function(args) {
        const res = await fetch(args);
        return res.json();
      });
      let loggedIn = false;
      if (data.email) {
        loggedIn = true;
      }
      console.log(data)
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
                    <li><Link href="/Tours/"><a>Tienda</a></Link></li>
                    <li><Link href="/login"><a>Iniciar Sesion</a></Link></li>
                    {/* {loggedIn && (
                        <p>{data.email}</p>
                    )} */}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;