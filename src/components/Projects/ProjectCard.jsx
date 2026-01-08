import { easeOut, motion } from "framer-motion";

const ProjectCard = ({ data }) => {
  const children = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };
  return (
    <motion.div
      variants={children}
      className="border-4 rounded-3xl border-gray-500/40 md:min-h-100 w-full max-w-[400px] transition duration-150 hover:scale-103"
    >
      <div className="">
        <img className="p-2 rounded-3xl" src={data.img} alt="" />
      </div>
      <div className="">
        <h1 className="text-center font-bold text-4xl p-3">{data.name}</h1>
        <div className="flex justify-center items-center space-x-2 h-25">
          <h2 onClick={()=> {
            window.open(data.github)
          }} className="border-2 border-gray-500 py-1 px-4 rounded-2xl cursor-pointer">
            Github
          </h2>
          <h2 onClick={()=> {
            window.open(data.live)
          }} className="border-2 border-gray-500 py-1 px-4 rounded-2xl cursor-pointer">
            Live
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
