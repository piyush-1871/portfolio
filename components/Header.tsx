import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex flex-row justify-between sticky top-0 p-5 items-start max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
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
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
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
      </div>
    </header>
  );
}

export default Header;
