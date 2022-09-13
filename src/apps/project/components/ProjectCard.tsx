import React from "react";

const ProjectCard: React.FC<any> = ({ project }) => {
  return (
    <div className="p-4 w-full md:w-1/2 md">
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
        <div className="p-6">
          {/* Link to project url on click  title, description  */}
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={project.html_url}
          >
            <div className="flex flex-row justify-between items-center">
              <div className="my-2">
                <div className="mx-1">
                  <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
                    {project.name}
                  </h2>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="mx-1">
                  <span className="sr-only" />
                  <img
                    className="w-9 h-9"
                    src=" https://simpleicons.org/icons/git.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
              {project.description}
            </p>
          </a>
          {/* Project meta infomations */}
          <div className="flex flex-row justify-between">
            <div className="text-gray-400 text-sm font-extralight">
              {project.visibility}
              {project.language && ` • ${project.language}`}
              {project.updated_at &&
                ` • last updated
              at ${project.updated_at}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
