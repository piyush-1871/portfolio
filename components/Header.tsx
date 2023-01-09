import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex flex-row justify-between sticky top-0 p-5 items-start max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://twitter.com/PiyushB40841086"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://www.youtube.com/channel/UCxPvtub0futGyIZymzwM5sg"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://www.instagram.com/piyush_1871/"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          {/* Contact */}
          <SocialIcon
            network="email"
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
