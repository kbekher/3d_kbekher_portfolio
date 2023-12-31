import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] 
        max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#0991b1]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-cyan-600" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#0991b1]">Kristina</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Building exceptional web <br className="sm:block hidden" />experiences
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div 
        className="absolute xs:bottom-10 bottom-20 w-full flex 
          justify-center items-center"
      >
        <a href="#about">
          <div 
            className="w-[28px] h-[44px] rounded-3xl border-2
              border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 16, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;