import { easeInOut, motion } from "motion/react";
import BlurText from "../BlurText";
import GradientText from "../GradientText";
import SplitText from "../SplitText";

const Home = () => {

  const animation = {
    initial: { y: -100, opacity: 0, scale: 0.7, filter: "blur(10px)" },
    animate: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: {
      y: { duration: 0.8, ease: easeInOut },
      opacity: { duration: 0.8, ease: easeInOut },
      scale: { duration: 0.8, delay: 0.85, ease: easeInOut },
      filter: { duration: 0.8, delay: 0.1, ease: easeInOut}
    },
  };

  const textAnimation = {
    initial: { y: 100, opacity: 0, scale: 0.5, filter: "blur(10px)" },
    animate: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: {
      y: { duration: 0.8, ease: easeInOut },
      opacity: { duration: 0.8, ease: easeInOut },
      scale: { duration: 1.5, ease: easeInOut },
      filter: { duration: 0.8, delay: 0.5, ease: easeInOut },
    },
  };

  return (
    <div
      // ref={ref}
      id="/"
      className={`flex flex-col space-y-10 justify-center items-center h-[100vh] w-screen`}
    >
      <div className="">
        <motion.img
          initial={animation.initial}
          // animate={isInView ? animation.animate : animation.initial}
          whileInView={animation.animate}
          transition={animation.transition}
          viewport={{ once: true }}
          className="w-30 h-30 sm:w-40 sm:h-40 rounded-full object-cover"
          src="/me.jpg"
        />
      </div>
      <div className="text-center space-y-2">
        <div className="flex justify-center items-center">
          <SplitText
            text="Hello, I'm"
            className="font-extrabold text-xl sm:text-2xl text-gray-400 text-center"
            delay={150}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <div className="flex justify-center items-center">
          <BlurText
            text="Abir Hasan"
            delay={300}
            animateBy="words"
            direction="down"
            className="text-2xl sm:text-4xl font-[900] tracking-wider"
          />
        </div>
        <motion.div
          initial={textAnimation.initial}
          whileInView={textAnimation.animate}
          transition={textAnimation.transition}
          viewport={{ once: true }}
        >
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            animationSpeed={3}
            showBorder={false}
            className="w-[90%] m-auto text-md sm:text-lg font-[300] md:w-[90%] bg-clip-text text-transparent"
          >
            A web developer crafting seamless front-end experiences and reliable
            back-end applications using the MERN stack.
          </GradientText>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
