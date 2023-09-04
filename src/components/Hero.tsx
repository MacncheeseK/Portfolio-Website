'use client'
import{ useScroll, useTransform, motion} from 'framer-motion'
import { useRef } from 'react';


export const Hero = () => {
  const ref= useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({target:ref});
  const scrollProgress = useTransform(scrollYProgress,[0,1],[0,-5600],)

  return (
    <div className="bg-gray-700 h-[5000px]">
      <header className="min-h-[10vh] flex justify-center items-center z-10 p-6 py-28">
        <h1 className="text-xl font-bold text-white">
          Welcome to my world! I'm Mancheese I loves to think outside the box.
          I'm always looking for new ways to create innovative and visually
          appealing work. I'm excited to share my work with you and see what you
          think.
        </h1>
      </header>
      <div className=" fixed top-0 ">
        <motion.span
          ref={ref}
          className="font-Yapari font-bold  text-white text-[15rem] "
          style={{ x:scrollProgress}}
        >
          Welcome
        </motion.span>
      </div>
    </div>
  );
}
export default Hero