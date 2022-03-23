import React, { useState } from "react";
import Router from "next/router";
import cookie from "js-cookie";
import Link from "next/link";
import styles from "../styles/Login-Signup.module.css";

const Signup = () => {
  const [signupError, setSignupError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data && data.error) {
          setSignupError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set("token", data.token, { expires: 2 });
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
            <div className={styles.welcome}>Registrar</div>
            <div className={styles.inputfields}>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                type="username"
                placeholder="Usuario"
                className={styles.inputline}
              ></input>
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
              Ya tienes cuenta? <span className={styles.highlight}>Iniciar Sesión</span>
            </div>
            <div>
              <button type="submit" value="submit" className={styles.ghostround}>
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
      {signupError && <p style={{ color: "red" }}>{signupError}</p>}
      <Link href="/index"><a></a></Link>
    </form>
  );
};

export default Signup;
