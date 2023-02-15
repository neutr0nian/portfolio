import React from "react";
import { motion } from "framer-motion";
import { tools } from "../resources/data";

const Tools = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1 font-semibold dark:text-white lg:text-5xl">
          Experienced In
        </h3>
      </div>
      <div className="flex flex-wrap lg:w-[1000px] my-3 rounded-lg justify-center mx-auto bg-gray-100 dark:bg-gray-800 gap-4">
        {tools.map((tool, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.7, delay: index / 100 }}
          >
            <div
              key={index}
              className="text-center  p-7 py-4 rounded-xl my-10 bg-gray-200 dark:bg-gray-700"
            >
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {tool.name}
              </h3>
              <p className="dark:text-gray-300 font-medium">{tool.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Tools;
