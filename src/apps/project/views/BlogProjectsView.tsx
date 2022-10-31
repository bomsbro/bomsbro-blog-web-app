import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import ProjectCard from "@project/components/ProjectCard";
import SubAppBar from "@src/common/components/organisms/SubAppBar";

const BlogProjectsView: React.FC = () => {
  const fetchProjectList = async () => {
    return axios.get("https://api.github.com/users/bomsbro/repos");
  };

  const { isLoading, isError, data, error } = useQuery("projects", fetchProjectList, {
    onSuccess: async res => {
      // 성공시 호출
      console.log(res);
    },
  });

  return (
    <>
      <SubAppBar />
      <div className="flex flex-row justify-between items-center ">
        <div className="pt-6 space-y-2 md:space-y-5 md:pb-8">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl md:leading-14">
            Repos
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {`I am part of these ${(data?.data.length || 1) - 1} 
            projects.`}
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
                width={64}
                height={64}
                className="w-16 h-16 md:w-20 md:h-20"
                src="https://simpleicons.org/icons/github.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <main className="container w-full py-12 relative mb-auto flex flex-wrap -m-4">
        {data?.data.map((project: any) => {
          if (project.name === "bomsbro") return null; // Except project information Repo
          return <ProjectCard key={project.id} project={project} />;
        })}
      </main>
    </>
  );
};

export default BlogProjectsView;
