import API from "@bomsbro-blog-core/API";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

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

const BlogProjectsView: React.FC = () => {
  const fetchProjectList = async () => {
    return axios.get("https://api.github.com/users/bomsbro/repos");
  };

  const { isLoading, isError, data, error } = useQuery(
    "projects",
    fetchProjectList,
    {
      onSuccess: async (res) => {
        // 성공시 호출
        console.log(res);
      },
    }
  );

  return (
    <div>
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex flex-row justify-between items-center ">
          <div className="pt-6 space-y-2 md:space-y-5 md:pb-8">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Projects
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {
                `I am part of these ${(data?.data.length || 1) - 1} 
            projects.` /* TODO: 1개 빼줘야 함 */
              }
            </p>
          </div>
          <div className="md:pr-4">
            <div className="mx-1">
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/bomsbro"
              >
                <span className="sr-only" />
                <img
                  className="w-16 h-16 md:w-20 md:h-20"
                  src="https://simpleicons.org/icons/github.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <main className="relative mb-auto">
          <div className="">
            <div className="container py-12">
              <div className="flex flex-wrap -m-4">
                {data?.data.map((project: any) => {
                  if (project.name === "bomsbro") return null; // Except project information Repo
                  return <ProjectCard key={project.id} project={project} />;
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogProjectsView;
