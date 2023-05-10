
import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { exploreCard, TypingText, TitleText, ExploreCard} from '../components';

import { exploreArtists } from "../constants";

const Explore = () => {

  const [active,setActive] = useState('artist2')

  return(
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount:0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Quienes Somos" textStyles="text-center"/>
        <TitleText 
          title={<>Ve nuestro portafolio <br className="md:block hidden" /> y agenda una hora facilmente! </>}
          textStyles="text-center"  
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreArtists.map((artist, index) => (
            <ExploreCard 
              key={artist.id}
              {...artist}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Explore;
