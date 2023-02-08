"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import EllipsisSVG from "@/assets/svgs/ellipsis.svg";
import ArrowDown from "@/assets/svgs/arrow-down.svg";

const Hero = () => {
  return (
    <section className="h-screen w-screen bg-black">
      <header className="h-[2%]">
        <Navbar />
      </header>
      <main className="h-[96%]  flex justify-between items-center font-clash">
        <p className="w-1/6 text-lightGrey uppercase font-semibold pl-20">
          Lucas <br /> Barallobre
        </p>
        <h1 className="font-semibold text-white text-2xl leading-[8rem] align-middle z-10 pr-10">
          Building the <br />
          products of <br />
          the future
        </h1>
        <EllipsisSVG className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
        <p className=" text-lightGrey uppercase font-semibold pr-20">
          Creative Front <br /> End Developer
          <br />
        </p>
      </main>
      <motion.button
        className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] flex justify-center items-center fill-blue"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <ArrowDown className="w-[20px] h-[20px]" />
      </motion.button>
    </section>
  );
};

export default Hero;
