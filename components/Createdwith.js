export const Createdwith = ({ techs }) => {
  return (
    <div className="mt-10">
      <h3 className="text-lg dark:text-cyan-300">Created with</h3>
      <div className="flex gap-5">
        {techs.map((tech) => (
          <div className="text-center shadow-lg p-2 py-2 rounded-xl mt-4 border border-cyan-300 dark:bg-gray-800 flex-1">
            <h3 className="text-md font-medium dark:text-white ">{tech}</h3>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
