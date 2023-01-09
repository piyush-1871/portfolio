import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
    initial={{
      opacity:0
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:1.5
    }}
    className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="https://lh3.googleusercontent.com/a/AEdFTp7S1wOBLCUBiKK2iJu2oU_uCuxaksFCIq_hBOvkPA=s360-p-rw-no"
        alt="my-pic"
        className="-mb-28 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[380px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here's a <span className="underline decoration-[#F7AB0A]/50">little</span> {" "}
          background:
        </h4>
        <p className="text-sm ">
          I'm 👨‍🦱Piyush Bhatnagar, currently a 3rd year student at Jamia Millia Islamia.
          I have been coding for over 2 years now. 
          I have a little experience with Nodejs and Expressjs, 
          but I love to develop websites with Reactjs.
          Being a 🏎️Mechanical Engineer, I realised very early my interest in Website Development.
          So I started my 💻Coding journey with 📚Data Structures and Algorithms in C++,
          then I realised that I haven't made anything that I can show
          in my portfolio. So I took some online courses for 🧑‍💻MERN Stack Develoment and now I am here!! 
        </p>
      </div>
    </motion.div>
  );
}

export default About;
