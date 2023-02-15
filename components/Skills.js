import React from "react";
import { motion } from "framer-motion";
import { languages } from "../resources/data";

const Skills = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl py-1 font-semibold dark:text-white lg:text-5xl ">
            Superskilled In
          </h3>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{
          opacity: 1,
          y: 10,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center gap-4 w-[500px] my-3 rounded-lg mx-auto bg-gradient-to-r from-green-400 to-blue-500">
          {languages.slice(0, 3).map((lang, index) => (
            <div
              key={index}
              className="text-center shadow-lg p-10 rounded-lg my-10 text-white bg-gray-800"
            >
              <h3 className="text-lg font-medium ">{lang}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
