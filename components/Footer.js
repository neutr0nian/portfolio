import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="py-5 text-center ">
      <h3 className="pt-14 font-light text-3xl text-center text-gray-800 dark:text-gray-200">
        Thank you for visiting
      </h3>
      <div className="flex gap-7 justify-center items-center py-2 pt-4">
        <h3 className="text-lg text-gray-800 dark:text-white">Built with</h3>
        <SiNextdotjs className="dark:text-white" size={"1.6em"} />
        <SiTailwindcss className="dark:text-white" size={"1.6em"} />
        <SiFramer className="dark:text-white" size={"1.6em"} />
      </div>
    </div>
  );
};
