import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div
      className="group relative flex 
    cursor-pointer"
    >
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="data:image/png;base64,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"
        className="rounded-full border border-gray-500
        object-cover w-24 h-24
        filter group-hover:grayscale transition duration-200
        ease-in-out"
      />
      <div
        className="absolute opacity-0
      group-hover:opacity-80 transition 
      duration-300 ease-in-out group-hover:bg-transparent
      h-24 w-24  xl:w-32 xl:h-32
      rounded-full z-0"
      >
        <div
          className="flex items-center
        justify-center h-full"
        >
          <p
            className="text-3xl font-bold
          text-black opacity-100"
          >
            40%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
