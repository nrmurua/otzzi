import React, { useState } from 'react';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, staggetContainer, textVariant } from '../utils/motion';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const NavbarButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const handleSectionClick = (section) => {
    console.log(`Navigating to ${section}`);
    // Handle the section click event
  };

  const renderFullscreenMenu = () => {
    return (
      <div className="fullscreen-menu">
        <button className="close-button" onClick={toggleNavbar}>
          <span className="close-icon">&times;</span>
        </button>
        <ul className="menu-items flex flex-col justify-center items-center">
            <li>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
                onClick={toggleNavbar}
              >
                <Link href="/">
                  <div className="flex justify-center items-center flex-col relative z-10">
                    <motion.h1
                      variants={textVariant(0.19)}
                      className={styles.menuItem}
                    >
                    Principal
                    </motion.h1>
                  </div>
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
                onClick={toggleNavbar}
              >
                  <ScrollLink
                    to="portafolios"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={toggleNavbar}
                  >
                    <div className="flex justify-center items-center flex-col relative z-10">
                      <motion.h1
                        variants={textVariant(0.38)}
                        className={styles.menuItem}
                      >
                        Portafolios
                      </motion.h1>
                    </div>
                  </ScrollLink>
              </motion.div>
            </li>
            <li>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
                onClick={toggleNavbar}
              >
                <Link href="/estudio">
                  <div className="flex justify-center items-center flex-col relative z-10">
                    <motion.h1
                      variants={textVariant(0.57)}
                      className={styles.menuItem}
                    >
                    Estudio
                    </motion.h1>
                  </div>
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
                onClick={toggleNavbar}
              >
                <Link href="/salud">
                  <div className="flex justify-center items-center flex-col relative z-10">
                    <motion.h1
                      variants={textVariant(0.76)}
                      className={styles.menuItem}
                    >
                    Salud
                    </motion.h1>
                  </div>
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
                onClick={toggleNavbar}
              >
                <div>
                  <Link href="/tatuajes">  
                    <motion.div
                      variants={textVariant(0.6)}
                      className="flex flex-row justify-center items-center"
                    >
                      <motion.h1
                      variants={textVariant(0.95)}
                      className={styles.menuItem}
                      >
                        <Link href="\login">Ingresar</Link>/<Link href="\signup">Registrarse</Link>
                      </motion.h1>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </li>
        </ul>
      </div>
    );
  };

              

  return (
    <div className="navbar-button-container">
      <div className={`navbar-icon ${isActive ? 'active' : ''}`} onClick={toggleNavbar}>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
      {isActive && (
        <div className="fullscreen-menu-overlay">
          {renderFullscreenMenu()}
        </div>
      )}
    </div>
  );
};

export default NavbarButton;