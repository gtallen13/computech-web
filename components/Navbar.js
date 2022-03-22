import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import cookie from "js-cookie";

const Navbar = () => {
  const { data, revalidate } = useSWR("../pages/api/me", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  const [loggedIn, setLoggedIn] = useState(false); 
  // if (data.email) {
  //   loggedIn = true;
  // }
  if (!data) return (
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
          {loggedIn && (
            <>
              <li><Link href="/"><a>Inicio</a></Link></li>
              <li><Link href="/Tours/"><a>Tienda</a></Link></li>
              <li><Link href=""><a>{data.email}</a></Link></li>
              <li><Link href="/">
                  <a
                    onClick={() => {
                    cookie.remove("token");
                    revalidate();
                    }}
                    >Logout</a></Link></li>
              {/* <p>Welcome !</p>
              <button
                onClick={() => {
                  cookie.remove("token");
                  revalidate();
                }}
              >
              </button> */}
            </>
          )}
          {!loggedIn && (
            <>
              <li><Link href="/"><a>Inicio</a></Link></li>
              <li><Link href="/Tours/"><a>Tienda</a></Link></li>
              <li><Link href="/signup" ><a >Iniciar Sesion</a></Link></li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
