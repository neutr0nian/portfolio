import { Createdwith } from "./Createdwith";

const ProjectDetails = ({ project }) => {
  return (
    <>
      <div className="basis-1/3 flex-1">
        <h3 className="text-6xl dark:text-white">{project.index}</h3>
        <p className="text-lg my-2 dark:text-white">{project.name}</p>
        <div className="mt-5 font-light dark:text-white">
          {/* <p>{project.description}</p> */}
          <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
        </div>
        {<Createdwith techs={project.techs} />}
      </div>
    </>
  );
};

export default ProjectDetails;
