import { ImageC } from "../components/ImageC";
import ProjectDetails from "./ProjectDetails";

export const Project = ({ id, img, project, link }) => {
  return (
    <>
      {id % 2 === 0 ? (
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <ImageC img={img} link={link} />
          <ProjectDetails project={project} />
        </div>
      ) : (
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <ProjectDetails project={project} />
          <ImageC img={img} link={link} />
        </div>
      )}
    </>
  );
};
