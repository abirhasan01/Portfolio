import { motion } from "framer-motion";
import { skillsDetails } from "../../assets/assets.js";
import ScrollFloat from "../ScrollFloat.jsx";
import SkillCard from "./SkillCard.jsx";

const Skill = () => {
  const isMobile = window.innerWidth < 756;
  
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <div
      id="skill"
      className={`w-screen md:min-h-screen flex justify-center items-center flex-col pt-25 transition-opacity duration-500 `}
    >
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-4xl md:text-5xl font-bold text-gray-100"
      >
        Skills
      </ScrollFloat>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: isMobile ? 0 : 0.4 }}
        className={`grid md:max-w-[90%] md:max-h-screen m-auto md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-4 justify-items-center mt-15 lg:mt-auto transition-all duration-500`}
      >
        <SkillCard data={skillsDetails.frontend} />
        <SkillCard data={skillsDetails.tools} />
        <SkillCard data={skillsDetails.backend} />
        <SkillCard data={skillsDetails.database} />
      </motion.div>
    </div>
  );
};

export default Skill;
