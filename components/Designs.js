import React from "react";
import { ImageC } from "./ImageC";
import { motion } from "framer-motion";

import insta from "../public/insta.png";
import netflix from "../public/netflix.png";
import rentaway from "../public/rentaway.png";
import dancestry from "../public/dancestry.png";

const Designs = () => {
  return (
    <div className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl text-center py-2 font-semibold dark:text-white lg:text-3xl">
          Creating{" "}
          <p className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Wonderfull Designs
          </p>
        </h3>
      </motion.div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-5 py-4">
        <ImageC
          img={insta}
          link={
            "https://www.figma.com/proto/HyOnnLeeSpSAoIiink0Sir/Instagram?node-id=0%3A1"
          }
        />
        <ImageC
          img={netflix}
          link={
            "https://www.figma.com/proto/wsg38gflsOFfNJAMGeW8Zt/Netflix?page-id=0%3A1&node-id=1%3A2&viewport=448%2C395%2C0.59&scaling=min-zoom"
          }
        />
        <ImageC
          img={rentaway}
          link={
            "https://www.figma.com/proto/2A7q6fW9It15kMy3GJoDW5/RentAway?page-id=0%3A1&node-id=6%3A4&scaling=scale-down-width"
          }
        />
        <ImageC
          img={dancestry}
          link={
            "https://www.figma.com/proto/nmK0SMpb0NUVKKVG0uYhAv/Dancestry?page-id=0%3A1&node-id=0%3A1&viewport=315%2C278%2C0.49&scaling=scale-down"
          }
        />
      </div>
    </div>
  );
};

export default Designs;
