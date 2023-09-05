import HamburgerMenu from './HamburgerMenu';

export const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <h1 className="font-Yapari text-lg p-2 ">Macncheese</h1>
      <ul className="flex gap-6 items-center text-xl ">
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
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
