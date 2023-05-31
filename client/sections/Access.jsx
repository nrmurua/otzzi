import { motion } from "framer-motion";

import styles from '../styles';
import { slideIn, staggerContainer, staggetContainer, textVariant } from '../utils/motion';
import { TitleText, TypingText } from "../components";
import Link from 'next/link'

const Access = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Acceso usuarios App" textStyles="text-center"/>
      <div className="flex justify-center items-center flex-col relative z-10">
        <Link href="/login">
          <TitleText 
            title={<>¿Tatuador o Cliente? <br className="md:block hidden" /> Accede a tu cuenta pulsando aquí </>}
            textStyles="text-center"  
          />
        </Link>
      </div>
    </motion.div>
  </section>
);

export default Access;
