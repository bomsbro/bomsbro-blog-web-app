import React from "react";

const BlogProjectView: React.FC = () => {
  return (
    <template>
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
              <div className="flex flex-wrap -m-4" />
            </div>
          </div>
        </main>
      </div>
    </template>
  );
};

export default BlogProjectView;
