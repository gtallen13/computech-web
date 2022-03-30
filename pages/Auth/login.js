import React, { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {useCart} from 'react-use-cart'
import styles from "../../styles/Login-Signup.module.css";
import { useContext } from "react";
import { UserContext } from "../../utils/UserContext";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser}= useContext(UserContext)
  const {emptyCart} = useCart()
  const { register, handleSubmit, formState: {errors}} = useForm();
  const handleError = (errors) => {}

  const loginOptions = {
    email: {
      required: "Ingrese un correo",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Ingrese un correo valido"
      }
    },
    password: {
      required: "Ingrese una contraseña",
      minLength: {
        value: 8,
        message: "La contraseña debe tener al menos 8 carácteres"
      }
    }
  }

  function handleLogin(e) {
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
          emptyCart();
          Router.push("/");
        }
      });
  }

  return (
    <form onSubmit={handleSubmit(handleLogin, handleError)}>
      <div className={styles.container}>
        <div className={styles.window}>
        <div className={styles.boldline}></div>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <div className={styles.welcome}>Iniciar Sesión</div>
            <div className={styles.inputfields}>
              <input
                name="email"
                type="email"
                {...register('email', loginOptions.email)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo"
                className={styles.inputline}
              />{errors?.email && errors.email.message}
              <input
                name="password"
                type="password"
                {...register('password', loginOptions.password)}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className={styles.inputline}
              />{errors?.password && errors.password.message}
            </div>
            <div className={styles.spacing}>
              Aún no tienes cuenta? <Link href="/Auth/signup"><a><span className={styles.highlight}>Crear cuenta</span></a></Link>
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
