import ScrollFloat from "@/components/ScrollFloat";
import { motion } from "framer-motion";
import { projectDetails } from "../../assets/assets";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const isMobile = window.innerWidth < 756;
  const containerVarinats = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  return (
    <div id="projects" className="md:min-h-screen w-screen pt-25">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-4xl md:text-5xl font-bold w-screen"
      >
        Projects
      </ScrollFloat>
      <motion.div
        variants={containerVarinats}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: isMobile ? 0 : 0.4 }}
        className="flex justify-center flex-wrap flex-col md:flex-row gap-5 items-center mt-15 p-5"
      >
        <ProjectCard data={projectDetails.Project1} />
        <ProjectCard data={projectDetails.Project2} />
        <ProjectCard data={projectDetails.Project3} />
      </motion.div>
    </div>
  );
};

export default Projects;
