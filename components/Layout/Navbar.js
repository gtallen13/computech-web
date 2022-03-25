import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import cookie from "js-cookie";
import { useContext } from "react";
import { UserContext } from "../../utils/UserContext";
import styles from '../../styles/Login-Signup.module.css'

const Navbar = () => {
  const {user, setUser}= useContext(UserContext);
    return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav>
        <div className="logo">
          <h4>CompuTech</h4>
        </div>
        <label htmlFor="btn-Menu" className="icon">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </label>
        <input id="btn-Menu" type="checkbox" />
        <ul>
            <li><Link href="/"><a>Inicio</a></Link></li>
            <li><Link href="/Tienda/Categorias"><a>Tienda</a></Link></li>
            {!user && <li><Link href="/Auth/Login"><a>Iniciar Sesion</a></Link></li>}
            
            {user && 
            <>
              <li className="user-title">{user.username}</li>
              <li>
                  <Link href="/">
                  <a
                    onClick={() => {
                    cookie.remove("token");
                    setUser(null)
                    revalidate();
                    }}
                  >
                    <FontAwesomeIcon icon={faSignOut} />  
                  </a>
                </Link>
              </li>
            </>}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
