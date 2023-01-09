import { motion } from "framer-motion";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:piyush1871b@gmail.com?subject=${formData.subject}&body=Hi,
     my name is ${formData.name}, 
    ${formData.message} ({formData.email})`
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col
      text-center md:text-left md:flex-row
      m-w-7xl px-10 justify-evenly mx-auto
       items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-8">
        <h4
          className="text-xl lg:text-4xl md:text-2xl font-semibold
        text-center"
        >
          I have got just what you need.{" "}
          <span
            className="decoration-[#F7AB0A]/50
            underline"
          >
            Let's Talk
          </span>
        </h4>

        <div className="">
          <div
            className="flex items-center
            space-x-5"
          >
            <PhoneIcon
              className="text-[#F7AB0A]
            h-7 w-7 animate-pulse"
            />
            <p className="text-xl">+91-9315020268</p>
          </div>

          <div
            className="flex items-center
            space-x-5"
          >
            <MapPinIcon
              className="text-[#F7AB0A]
            h-7 w-7 animate-pulse"
            />
            <p className="text-xl">Developer Lane</p>
          </div>

          <div
            className="flex items-center
            space-x-5"
          >
            <EnvelopeIcon
              className="text-[#F7AB0A]
            h-7 w-7 animate-pulse"
            />
            <p className="text-xl">piyush1871b@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3
        w-fit max-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            className="bg-[#F7AB0A] py-5
            px-10 rounded-md text-black font-bold
            text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
