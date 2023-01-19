import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typing";
import Image from "next/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex rounded-lg justify-between
      space-y-7 flex-shrink-0 w-[450px] md:h-[450px] lg:h-[450px]
    snap-center bg-[#292929]
     p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity
     duration-200 
    "
    >
      <div className="px-0 md:px-8">
        <h2 className="text-3xl font-light">{experience?.jobTitle}</h2>
        <p className="flex space-x-2 my-2">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies?.map((technology) => (
            <Image
              alt=""
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm overflow-y-auto">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full
        md:rounded-full
        object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="organization-logo"
      />
    </article>
  );
}

export default ExperienceCard;
