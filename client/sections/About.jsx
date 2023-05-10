
import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
    <TypingText 
      title="| Sobre Nosotros"
      textStyles="text-center"  
    />
    
    <motion.p
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
    >
      <span className="font-extrabold text-white">Lorem</span> ipsum dolor sit amet, 
      consectetur adipiscing elit. Nam vitae diam ornare, pulvinar felis id, 
      faucibus urna. Etiam rutrum dolor vel mi ultrices <span className="font-extrabold text-white">tincidunt</span> nec
      sit amet ex. Donec nec rutrum nibh, eu cursus metus. Quisque eget metus aliquet, 
      suscipit eros sed, tincidunt ex. Nunc ut hendrerit quam, in tincidunt 
      libero. <span className="font-extrabold text-white">Morbi sodales ante eget eros commodo</span>
      , ac rhoncus augue tempor. In dapibus tristique malesuada.
    </motion.p>

    <motion.img
      variants={fadeIn('up', 'tween', 0.3, 1)}
      src="/arrow-down.svg"
      alr="arrow.down"
      className="w-[18px] h-[28px] object-contain mt-[28px] "
    />

    </motion.div>
    
  </section>
);

export default About;
