import React from "react";

const ProjectCard: React.FC = () => {
  return (
    <div className="p-4 md:w-1/2 md">
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
        <div className="p-6">
          <div className="flex flex-row justify-between items-center">
            <div className="my-2">
              {/* <Folder className="text-indigo-800" /> */}
            </div>
            <div className="flex flex-row justify-between">
              <div className="mx-1">
                <a
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="projectHref"
                >
                  <span className="sr-only" />
                  <img
                    className="w-6 h-6"
                    src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                    alt=""
                  />
                </a>
              </div>
              <div className="mx-1">
                <a
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="projectGithub"
                >
                  <span className="sr-only">github</span>
                  <img
                    className="w-6 h-6"
                    src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
            하이
          </h2>
          <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
            하이
          </p>
          <div className="flex flex-row justify-between">
            <div className="text-gray-400 text-sm font-extralight">
              하이 • 하이 • 하이
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogProjectView: React.FC = () => {
  return (
    <div>
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Some of the projects I&apos;ve build or been a part of.
          </p>
        </div>
        <main className="relative mb-auto">
          <div className="">
            <div className="container py-12">
              <div className="flex flex-wrap -m-4">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogProjectView;
