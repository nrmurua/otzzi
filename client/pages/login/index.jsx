import { useState } from "react";
import { NextResponse } from 'next/server';
import Link from "next/link";
import styles from "./styles.module.css";
import api from "../../api/api";
import { middlewareLogin } from "../middleware.js"
import jwt_decode from 'jwt-decode';
import Cookies from 'cookies';
import { useHistory } from 'react-router-dom';

const LogInPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleChangeEmail = ({ currentTarget: input }) => {
		setEmail(input.value);
	};

	const handleChangePassword = ({ currentTarget: input }) => {
		setPassword(input.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const params = {email, password}
		try {
			const resp = await api.post('/login', params);
			const token = resp.data.token;
			const decodedToken = jwt_decode(token);

			if (decodedToken.role === 'customer') {
				window.location.href = '/';
			} else if (decodedToken.role === 'artist') {
				window.location.href = '/signup';
			}
			
		} catch (error) {
			console.error('Login failed:', error);
			// Handle registration failure, show error messages, etc.
		}
	};

    return(
      <section className={`${styles.yPaddings} sm:pl-16 pl-6 content`}>
			<div className={`${styles.innerWidth} mx-auto flex flex-col`}>
				<div className="flex justify-center items-center flex-col relative z-10">
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1 className="font-extrabold text-white">Iniciar sesion en Sistema de Reservas de Ötzzi</h1>
                        <br className="md:block hidden" />
						<input
							type="String"
							placeholder="Email"
							name="email"
							onChange={handleChangeEmail}
								// Aquí podrías redirigir al usuario a la página de inicio de artista			value={email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Contraseña"
							name="password"
							onChange={handleChangePassword}
							value={password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Iniciar Sesion
						</button>
					</form>
				</div>
				<div className="flex justify-center items-center flex-col relative z-10">
					<h1 className="font-extrabold text-white">¿Cliente Nuevo?</h1>
                    <br className="md:block hidden" />
                    <h1 className="font-extrabold text-white">Registrate para acceder a mas funcionalidades</h1>
					<br className="md:block hidden" />
                    <Link href="/signup">
						<button type="button" className={styles.green_btn}>
							Crear cuenta
						</button>
					</Link>
				</div>
			</div>
      </section>
    );  
  };
  
export default LogInPage;
  