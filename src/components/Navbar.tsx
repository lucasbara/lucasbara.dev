"use client";

import { useState } from "react";
import LucasBaraLogoSVG from "@/assets/svgs/logo.svg";
import MenuSVG from "@/assets/svgs/menu.svg";
import CloseSVG from "@/assets/svgs/close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="w-100 h-[0vh] bg-black
    flex justify-between items-star px-20 pt-10"
    >
      <LucasBaraLogoSVG />
      {isMenuOpen ? (
        <ul className="flex gap-4 font-clash font-semibold uppercase">
          <li className="border-r-blue">About |</li>
          <li>Skills</li>
          <li>Recent Work</li>
          <li>Contact</li>
          <li className="-pt-20">
            <button
              aria-label="Close menu"
              onClick={handleCloseMenu}
              type="button"
            >
              <CloseSVG className="w-6" fill="#122aff" />
            </button>
          </li>
        </ul>
      ) : (
        <button
          aria-label="Open menu"
          className="text-blue fill-slate-400
        "
          onClick={handleOpenMenu}
          type="button"
        >
          <MenuSVG className="w-12" fill="#122aff" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
