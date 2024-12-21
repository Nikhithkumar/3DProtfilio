import React from "react";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { useTypewriter } from "react-simple-typewriter";
import DownloadResume from "./component/DownloadPDF";

const Hero = () => {
  const [typewriter] = useTypewriter({
    words: [
      "React Native Developer",
      "Full Stack Developer",
      "Dot Net Core Developer",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

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
            I am a <span className="text-[#915EFF] typing">{typewriter}</span>{" "}
            <br className="sm:block hidden" /> with experience in building
            mobile apps <br className="sm:block hidden" />
            and web applications using the React Native and MERN stack.
          </p>
          <div className="mt-5">
            <DownloadResume />
          </div>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
