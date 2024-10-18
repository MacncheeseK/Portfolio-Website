import Scrolling from './Scrolling';
//import {img} from "../assets/images/background.jpg";
import { motion } from 'framer-motion';
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};
export const Hero = () => {
  return (
    <div className="bg-gray-700 h-[5000px]">
      <header className="min-h-[10vh] flex justify-center items-center z-10 p-6 py-28">
        <motion.div
          className="border-2 rounded-xl max-sm:flex-1 p-5 backdrop-blur-md"
          variants={banner}
        >
          <h1 className="text-xl font-bold text-white text-justify">
            Hello, I’m Dany Martinez. I’m currently a student at Montgomery
            College majoring in information science. I have been programming for
            the past five years creating various programs, websites, and apps
            learning a multitude of programming languages along the way. I’m
            passionate about bring my creative and artistic abilities into
            programming to make outstand projects. If you want to learn more
            about me, take a visit to my <a href="/about">About Me</a> page.
          </h1>
        </motion.div>
      </header>
      <div className="p:1 border border-white flex gap-2 overflow-hidden select-none animate-loop-scroll">
        <ul className="flex flex-wrap justify-center gap-2 items-center shrink-0 min-w-full ">
          <li>Walcome</li>
          <li>Walcome</li>
          <li>Walcome</li>
          <li>Walcome</li>
          <li>Walcome</li>
          <li>Walcome</li>
          <li>Walcome</li>
          <li>Walcome</li> 
        </ul>
      </div>
      <div className="">
        <Scrolling />
      </div>
    </div>
  );
};
export default Hero;
