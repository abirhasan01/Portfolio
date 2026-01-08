import { easeInOut, motion } from "motion/react";
import ScrollFloat from "../ScrollFloat";

const About = () => {
  const isMobile = window.innerWidth < 756;

  const animation = {
    initial: { opacity: 0.2, scale: 0.9, x: isMobile ? -50 : -200 },
    animate: { opacity: 1, scale: 1, x: 0 },
    transition: {
      x: { duration: isMobile ? 0.5 : 1, ease: easeInOut },
      opacity: {
        duration: isMobile ? 0.5 : 0.8,
        delay: isMobile ? 0.6 : 0.9,
        ease: easeInOut,
      },
      scale: {
        duration: isMobile ? 0.5 : 0.8,
        delay: isMobile ? 0.5 : 0.8,
        ease: easeInOut,
      },
    },
    viewport: { once: true, amount: 0.9 },
  };

  return (
    <div
      id="about"
      className={`w-screen min-h-full md:h-[80vh] pt-25 transition-opacity duration-500`}
    >
      <div className="text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.02}
          textClassName="text-gray-200 text-2xl md:text-4xl font-[500]"
          containerClassName=""
        >
          Get To Know More
        </ScrollFloat>
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-4xl md:text-5xl font-extrabold text-gray-100"
          containerClassName=""
        >
          About Me
        </ScrollFloat>
      </div>
      <div
        className={`flex justify-center items-center flex-col mt-10 md:mt-0 min-h-full md:h-[60vh] w-screen space-y-3 transition-all duration-500`}
      >
        <motion.p
          initial={animation.initial}
          whileInView={animation.animate}
          transition={animation.transition}
          viewport={animation.viewport}
          className="md:w-[60%] text-sm md:text-lg w-[90%] font-[600] text-gray-300"
        >
          Hi! I'm Abir Hasan, a passionate web developer who loves turning ideas
          into real-world applications. I started with front-end development,
          creating responsive and interactive interfaces using HTML, CSS,
          JavaScript, and React, and later expanded into back-end development
          with Node.js, Express, and MongoDB to build full-stack applications.
        </motion.p>
        <motion.p
          initial={animation.initial}
          whileInView={animation.animate}
          viewport={animation.viewport}
          transition={{
            x: { duration: isMobile ? 0.7 : 1.2, ease: easeInOut },
            opacity: {
              duration: isMobile ? 0.5 : 0.8,
              delay: isMobile ? 0.7 : 1,
              ease: easeInOut,
            },
            scale: {
              duration: isMobile ? 0.5 : 0.8,
              delay: isMobile ? 0.5 : 0.8,
              ease: easeInOut,
            },
          }}
          className="md:w-[60%] text-sm md:text-lg w-[90%] font-[600] text-gray-300"
        >
          I enjoy solving challenges through clean, efficient code and designing
          products that are not only functional but also user-friendly.
          Constantly learning and experimenting, I aim to grow as a developer
          while creating meaningful digital experiences.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
