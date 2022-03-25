import React, { useState } from "react";
import Router from "next/router";
import cookie from "js-cookie";
import Link from "next/link";
import styles from "../../styles/Login-Signup.module.css";
import { useContext } from "react";
import { UserContext } from "../../utils/UserContext";
const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser}= useContext(UserContext)
  function handleSubmit(e) {
    e.preventDefault();
    //call api
    fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          // cookie.set("token", data.token, { expires: 2 });
          setUser(data.user)
          Router.push("/");
        }
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.window}>
        <div className={styles.boldline}></div>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <div className={styles.welcome}>Iniciar Sesión</div>
            <div className={styles.inputfields}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Correo"
                className={styles.inputline}
              ></input>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="Contraseña"
                className={styles.inputline}
              ></input>
            </div>
            <div className={styles.spacing}>
              Aún no tienes cuenta? <Link href="/Auth/Signup"><a><span className={styles.highlight}>Crear cuenta</span></a></Link>
            </div>
            <div>
              <button type="submit" value="submit" className={styles.ghostround}>
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
      {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      <Link href="/index"><a></a></Link>
    </form>
  );
};

export default Login;
