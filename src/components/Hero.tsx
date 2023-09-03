import{ useScroll, useTransform} from 'framer-motion'

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress,[0,1],[0,-200])

  return (
    <div className="bg-gray-700 h-[5000px]">
      <header className="min-h-[10vh] flex justify-center items-center z-10 p-6 py-28">
        <h1 className="text-xl font-bold text-white">
          Welcome to my world! I'm a Mancheese who loves to think outside the
          box. I'm always looking for new ways to create innovative and visually
          appealing work. I'm excited to share my work with you and see what you
          think.
        </h1>
      </header>
      <div className=" fixed top-0 ">
        <span
          className="font-Yapari font-bold  text-white text-[15rem] whitespace-nowrap transition-all duration-[0.5s]"
          style={{x}}
        >
          Welcome
        </span>
      </div>
    </div>
  );
}
export default Hero