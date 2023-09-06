import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }
  return (
    <section>
      <nav className="flex justify-between items-center fixed bg-white w-full pt-1  ">
        <h1 className="font-Yapari text-xl p-2 text-center ">Macncheese</h1>
        <ul className="flex gap-6  text-xl max-sm:hidden mr-7">
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
        <div className="hidden max-sm:block ">
          <HamburgerMenu toggleMenu={toggleMenu} />
        </div>
      </nav>
      <div className="{}"></div>
    </section>
  );
};

export default Navbar;
