import Image from "next/image";
import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import { roles } from "../resources/data";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center py-10 text-center">
        <div>
          <section className="py-5">
            <h2 className="text-5xl text-black-600 font-bold dark:text-white md:text-6xl lg:text-7xl">
              Pratik Chavan
            </h2>
            <div className=" text-2xl py-1 dark:text-white md:text-3xl">
              <p className="text-lg py-1">I can be your</p>
              <div className="scroller px-2">
                <span className="text-teal-600">
                  {roles.map((role) => (
                    <>
                      {role}
                      <br />
                    </>
                  ))}
                </span>
              </div>
            </div>
          </section>
          <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-lg">
            Creating creative and efficient solutions for Software Applications
            in Web Development, UI/UX Development, Machine Learning, and Data
          </p>
          <div className="text-5xl flex gap-16 justify-center py-4 text-gray-600 dark:text-gray-400 ">
            <a
              href="https://www.instagram.com/neutronian_/"
              target="_blank"
              rel="noreferrer"
              className="transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <AiFillInstagram
                href="https://www.instagram.com/neutronian_/"
                className="cursor-pointer"
                onMouseOver={(event) => {
                  event.target.classList.add("dark:text-white");
                }}
                onMouseOut={(event) => {
                  event.target.classList.remove("dark:text-white");
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pratikchvn/"
              target="_blank"
              rel="noreferrer"
              className="transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <AiFillLinkedin
                className="cursor-pointer"
                onMouseOver={(event) => {
                  event.target.classList.add("dark:text-white");
                }}
                onMouseOut={(event) => {
                  event.target.classList.remove("dark:text-white");
                }}
              />
            </a>
            <a
              href="https://github.com/neutr0nian"
              target="_blank"
              rel="noreferrer"
              className="transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <AiFillGithub
                className="cursor-pointer"
                onMouseOver={(event) => {
                  event.target.classList.add("dark:text-white");
                }}
                onMouseOut={(event) => {
                  event.target.classList.remove("dark:text-white");
                }}
                title={"visit my github profile"}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
        <Image src={deved} layout="fill" objectFit="cover" />
      </div>
    </>
  );
};

export default Hero;
