import hamburger from '../assets/hamburger.svg'
import { motion, spring, transform } from 'framer-motion';

export const HamburgerMenu =()=>{

  return (
    <div className="mr-8">
      <div>
        <motion.button
          animate={{ rotate: 180, scale: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 280 }}
        >
          <img src={hamburger} alt="hamburger menu" className="w-10 h-10 " />
        </motion.button>
      </div>
    </div>
  );
} 
export default HamburgerMenu