
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link'
import NavbarButton from './NavbarButton.jsx';


const Navbar = () => (
  <section>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-10 relative`}
    >
      <div className="absolute w-[30%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
          <img
            src="/logo.png"
            alt="logo"
            className="w-[24px] h-[24px] object-contain"
          />
        <Link href="/">
          <h2 className="font-bold text-[24px] leading-[30px] text-white">
            ÖTZZI
          </h2>
        </Link>
        <NavbarButton />
      </div>
    </motion.nav>
  </section>
);

export default Navbar;
