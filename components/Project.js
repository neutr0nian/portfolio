import React from "react";
import { projects } from "../resources/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { motion } from "framer-motion";

export const Project = ({ id, img, project, link }) => {
  return (
    <div className="flex flex-wrap gap-4 lg:w-[1200px] my-2 rounded-lg justify-center mx-auto ">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl text-center  font-semibold dark:text-white lg:text-5xl">
          Solutions{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Delivered
          </span>
        </h3>
      </motion.div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="rounded-lg "
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="cursor-pointer mb-10">
            <div className="">
              <Image src={project.img} />
              <h3 className="text-2xl my-3 font-semibold dark:text-white lg:text-2xl">
                {project.name}
              </h3>
              <p
                dangerouslySetInnerHTML={{ __html: project.description }}
                className="text-md mt-2  dark:text-gray-300"
              ></p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
