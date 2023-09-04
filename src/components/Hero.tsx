import Scrolling from "./Scrolling";

export const Hero = () => {
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
      <div className="">
        <Scrolling />
      </div>
    </div>
  );
}
export default Hero