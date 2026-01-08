import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = [
    { Name: "About", path: "#about" },
    { Name: "Skills", path: "#skills" },
    { Name: "Projects", path: "#projects" },
    { Name: "Contact", path: "#contact" },
  ];

  const animation = {
    initial: { y: -200 },
    animate: { y: 0 },
    transition: {
      duration: 1.2,
      delay: 0.2,
    //   ease: easeInOut,
    },
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-screen h-18 bg-transparent backdrop-blur-sm shadow-black fixed z-100 top-0">
      <motion.nav
        initial={animation.initial}
        animate={animation.animate}
        transition={animation.transition}
        className="bg-[#002455] w-[90%] md:w-[80%] rounded-full m-auto mt-2 fixed left-1/2 -translate-x-1/2 z-50"
      >
        <div className="px-5 py-3 flex justify-between items-center relative">
          {/* logo */}
          <a href="#">
            <img className="h-10" src="/logo.png" alt="logo" />
          </a>

          {/* desktop menu */}
          <ul className="hidden md:flex space-x-8 items-center font-bold pr-5">
            {NavLinks.map((link) => (
              <li
                key={link.Name}
                className="hover:text-white duration-200 text-gray-400"
              >
                <a href={link.path}>{link.Name}</a>
              </li>
            ))}
          </ul>

          <div ref={menuRef} className="md:hidden">
            {/* hamburger button */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex flex-col items-center space-y-1 focus:outline-none"
            >
              <span
                className={`block h-1 w-8 rounded-full bg-white transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-1 w-8 rounded-full bg-white transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-1 w-8 rounded-full bg-white transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>

            {/* mobile menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#002455] rounded-3xl overflow-hidden transition-all duration-300 ${
                open ? "w-[75vw] opacity-100" : "w-0 opacity-0"
              }`}
            >
              <ul className="flex flex-col items-center space-y-4 p-4 text-white font-bold">
                {NavLinks.map((link) => (
                  <li key={link.Name} className="w-full text-center">
                    <a
                      href={link.path}
                      onClick={() => setOpen(false)}
                      className="block p-2 rounded hover:bg-white/10"
                    >
                      {link.Name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
