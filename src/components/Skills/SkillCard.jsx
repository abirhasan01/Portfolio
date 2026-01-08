import { easeOut, motion } from "framer-motion";

const SkillCard = ({ data }) => {
  const cardVariants = {
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
      variants={cardVariants}
      className="p-5 m-2 border-5 border-indigo-400/40 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-indigo-500 rounded-2xl bg-gray-800/40 min-h-70 w-full max-w-[300px]"
    >
      <div className="flex justify-center space-x-3 items-center">
        <img className="h-8" src={data.img} alt={data.names[0]} />
        <h1 className="font-bold text-lg">{data.names[0]}</h1>
      </div>
      <div className="flex justify-start items-center flex-wrap p-5">
        {data.names.slice(1).map((skill, index) => (
          <p
            key={index}
            className="border-2 border-gray-400 py-1 px-2 rounded-2xl m-2"
          >
            {skill}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
