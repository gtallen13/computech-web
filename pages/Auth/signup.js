import React, { useState } from "react";
import Router from "next/router";
import cookie from "js-cookie";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styles from "../../styles/Login-Signup.module.css";

const Signup = () => {
  const [signupError, setSignupError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleError = (errors) => {}


  const registerOptions = {
    username: {
      required: "Ingrese un nombre de usuario",
      minLength: {
        value: 6,
        message: "El nombre de usuario debe tener al menos 6 carácteres"
      }
    },
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

  function handleRegistration() {
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
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div className={styles.container}>
        <div className={styles.window}>
        <div className={styles.boldline}></div>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <div className={styles.welcome}>Registrar</div>
            <div className={styles.inputfields}>
              <input
                name="username"
                type="username"
                {...register('username', registerOptions.username)}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Usuario"
                className={styles.inputline}
              />{errors?.username && errors.username.message}
              <input
                name="email"
                type="email"
                {...register('email', registerOptions.email)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo"
                className={styles.inputline}
              />{errors?.email && errors.email.message}
              <input
                name="password"
                type="password"
                {...register('password', registerOptions.password)}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className={styles.inputline}
              />{errors?.password && errors.password.message}
            </div>
            <div className={styles.spacing}>
              Ya tienes cuenta? <Link href="/Auth/login"><a><span className={styles.highlight}>Iniciar Sesión</span></a></Link>
            </div>
            <div>
              <button type="submit"  value="submit" className={styles.ghostround}>
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
      {signupError && <p style={{ color: "red" }}>{signupError}</p>}
    </form>
  );
};

export default Signup;
