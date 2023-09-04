'use strict';
import { useScroll, useTransform, motion, useMotionValue} from 'framer-motion';
import { useRef } from 'react';

const Scrolling = () => {
  const ref = useRef<HTMLElement>(null);
  const x= useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: ref });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, -5600]);

  return (
    <motion.h1
      
      animate={{ x: -2000 }}
      transition={{ duration: 10, yoyo: Infinity}}
      className="font-Yapari font-bold  text-white text-[15rem] whitespace-nowrap "
      
    >
      Welcome
    </motion.h1>
  );
};
export default Scrolling;
