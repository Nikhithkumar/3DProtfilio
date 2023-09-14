import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
const [typewriter]=useTypewriter({
  words:['Full Stack Web Developer','React Native Developer'],
  loop:{},
  typeSpeed:100,
  deleteSpeed:40
})

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF] typing">Nikhith Kumar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a <span className="text-[#915EFF] typing">{typewriter}</span> <br className="sm:block hidden" /> with experience in
            building web applications <br className="sm:block hidden" />
            and mobile apps using the MERN stack.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
