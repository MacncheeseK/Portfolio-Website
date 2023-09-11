import HamburgerMenu from './HamburgerMenu';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }
  useEffect(() => {
    const hideMenu = isOpen ? [""]
  })

  return (
    <section>
      <nav className="flex justify-between items-center fixed bg-white w-full pt-1  ">
        <h1 className="font-Yapari text-xl p-2 text-center ">Macncheese</h1>
        <motion.ul className="flex gap-6  text-xl max-sm:hidden mr-7" animate={{}}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact Me</a>
          </li>
        </motion.ul>
        <div className="hidden max-sm:block ">
          <HamburgerMenu toggleMenu={toggleMenu} />
        </div>
      </nav>
      <div className={ isOpen ? 'block': 'hidden'}>
        <ul className="absolute top-10 bg-white w-full text-center  flex-col flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
