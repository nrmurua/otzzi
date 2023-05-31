import { motion } from "framer-motion";

import { slideIn, staggerContainer, staggetContainer, textVariant } from '../../utils/motion';
import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { login, useLoginQuery } from "../../api/api";

const SignInPage = () => {
  
  const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
  const [error, setError] = useState("");
	
	const handleChangeFirstName = ({ currentTarget: input }) => {
		setFirstName(input.value);
	};

	const handleChangeLastName = ({ currentTarget: input }) => {
		setLastName(input.value);
	};

	const handleChangeEmail = ({ currentTarget: input }) => {
		setEmail(input.value);
	};

	const handleChangePassword = ({ currentTarget: input }) => {
		setPassword(input.value);
	};

	const handleChangePhone = ({ currentTarget: input }) => {
		setPhone(input.value);
	};

	const handleChangeAddress = ({ currentTarget: input }) => {
		setaddress(input.value);
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			useLoginQuery({
				email,
				password,
			});
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return(
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="flex justify-center items-center flex-col relative z-10">
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1 className="font-extrabold text-white">Registrarse como cliente en Sistema de Reservas de Ötzzi</h1>
                      <br className="md:block hidden" />
          <input
            type="String"
            placeholder="Nombre"
            name="firstName"
            onChange={handleChangeFirstName}
            value={firstName}
            required
            className={styles.input}
          />
          <input
            type="String"
            placeholder="Apellido"
            name="lastName"
            onChange={handleChangeLastName}
            value={lastName}
            required
            className={styles.input}
          />
          <input
            type="String"
            placeholder="Email"
            name="email"
            onChange={handleChangeEmail}
            value={email}
            required
            className={styles.input}
          />
          <input
            type="String"
            placeholder="Contraseña"
            name="password"
            onChange={handleChangePassword}
            value={password}
            required
            className={styles.input}
          />
          <input
            type="String"
            placeholder="Telefono"
            name="phone"
            onChange={handleChangePhone}
            value={phone}
            required
            className={styles.input}
          />
          <input
            type="String"
            placeholder="Domicilio"
            name="address"
            onChange={handleChangeAddress}
            value={address}
            required
            className={styles.input}
          />
          {error && <div className={styles.error_msg}>{error}</div>}
          <button type="submit" className={styles.green_btn}>
            Registrarse
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col relative z-10">
        <h1 className="font-extrabold text-white">¿Ya tienes una cuenta?</h1>
                  <br className="md:block hidden" />
                  <h1 className="font-extrabold text-white">Accede facilmente a traves de este enlace</h1>
        <br className="md:block hidden" />
                  <Link href="/login">
          <button type="button" className={styles.green_btn}>
            Iniciar sesion
          </button>
        </Link>
      </div>
    </div>
    </section>
  );  
  };
  
  export default SignInPage;
  