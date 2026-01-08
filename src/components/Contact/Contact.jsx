import { easeInOut, easeOut, motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { LuFacebook, LuGithub, LuLinkedin } from "react-icons/lu";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-[40vh] flex justify-center items-center flex-col space-y-5"
    >
      <motion.div
        initial={{ scale: 0.2, filter: "blur(10px)" }}
        whileInView={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: easeOut }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl md:text-5xl  font-bold w-screen text-center"
      >
        Get In Touch
      </motion.div>
      <motion.div
        initial={{ scale: 0.2, filter: "blur(10px)" }}
        whileInView={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: easeInOut }}
        viewport={{ once: true, amount: 0.5 }}
        className="h-[40%] w-full flex flex-wrap justify-center items-center"
      >
        <div className="flex space-x-3 justify-center items-center flex-wrap">
          <div
            className="flex justify-center items-center space-x-2 font-medium cursor-pointer my-2 mx-3"
            onClick={() => {
              window.location.href = "mailto:habir9605@gmail.com";
            }}
          >
            <CiMail />
            <h2>Email</h2>
          </div>
          <div
            className="flex justify-center items-center space-x-2 font-medium cursor-pointer my-2 mx-3"
            onClick={() => {
              window.open("https://www.facebook.com/AbirHasandev");
            }}
          >
            <LuFacebook />
            <h2>Facebook</h2>
          </div>
          <div
            className="flex justify-center items-center space-x-2 font-medium cursor-pointer my-2 mx-3"
            onClick={() => {
              window.open("https://www.linkedin.com/in/abirhasan0/");
            }}
          >
            <LuLinkedin />
            <h2>Linkedin</h2>
          </div>
          <div
            className="flex justify-center items-center space-x-2 font-medium cursor-pointer my-2 mx-3"
            onClick={() => {
              window.open("https://github.com/abirhasan01");
            }}
          >
            <LuGithub />
            <h2>Github</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
