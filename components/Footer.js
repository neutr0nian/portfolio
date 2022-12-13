import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="py-5 text-center ">
      <div className="flex gap-7 justify-center items-center py-2 pt-4">
        <h3 className="text-lg text-gray-800 dark:text-white">Built with</h3>
        <SiNextdotjs className="dark:text-white" size={"1.6em"} />
        <SiTailwindcss className="dark:text-white" size={"1.6em"} />
      </div>
    </div>
  );
};
