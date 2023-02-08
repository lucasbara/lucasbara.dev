"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LucasBaraLogoSVG from "@/assets/svgs/logo.svg";
import MenuSVG from "@/assets/svgs/menu.svg";
import CloseSVG from "@/assets/svgs/close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="w-100 h-[0vh] bg-black
    flex justify-between items-start px-20 pt-10"
    >
      <LucasBaraLogoSVG />
      <ul className="flex justify-center items-center gap-4 text-white font-clash font-semibold uppercase">
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
                exit={{ x: 20, opacity: 0 }}
                className="border-r-blue"
              >
                About
              </motion.li>
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
                exit={{ x: 20, opacity: 0 }}
              >
                Skills
              </motion.li>
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
                exit={{ x: 20, opacity: 0 }}
              >
                Recent Work
              </motion.li>
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
                exit={{ x: 20, opacity: 0 }}
                className="pr-5"
              >
                Contact
              </motion.li>
            </>
          )}
        </AnimatePresence>
        <button
          aria-label="Open menu"
          className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-transparent border border-blue fill-blue p-1 z-10 hover:bg-blue hover:fill-black"
          onClick={handleMenu}
          type="button"
        >
          {!isMenuOpen ? (
            <MenuSVG className="w-[20px] h-[20px]" />
          ) : (
            <CloseSVG className="w-[20px] h-[20px]" />
          )}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
