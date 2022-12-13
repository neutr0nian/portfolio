import React from "react";
import { ImageC } from "../components/ImageC";
import ProjectDetails from "./ProjectDetails";

export const Project = ({ id, img, project, link }) => {
  return (
    <React.Fragment>
      {id % 2 === 0 ? (
        <div
          key={id}
          className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"
        >
          <ImageC img={img} link={link} />
          <ProjectDetails project={project} />
        </div>
      ) : (
        <div
          key={id}
          className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"
        >
          <ProjectDetails project={project} />
          <ImageC img={img} link={link} />
        </div>
      )}
    </React.Fragment>
  );
};
