import React from "react";

const AuthorCard: React.FC = () => {
  return (
    <div>
      <div>
        <div className="md:block flex justify-center items-center">
          <img
            src="siteMetadata.author_image"
            loading="lazy"
            alt="me"
            className="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full"
          />
          <div className="mb-2 mx-7 mt-4 justify-center items-center">
            <h1 className="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100">
              작성자
            </h1>
            <div className="md:text-lg text-gray-600 dark:text-blue-100">
              포지션
            </div>
            <a
              href="#"
              className="text-gray-600 md:hidden mt-1 dark:text-blue-100"
            >
              이메일
            </a>
          </div>
        </div>

        <div className="mx-7 hidden md:block">
          <div className="my-2 text-gray-600 flex dark:text-blue-100">
            메일 아이콘
            <a href="#"> 하이</a>
          </div>
          <div className="my-2 text-gray-600 flex dark:text-blue-100">
            글로브 아이콘
            <p>사이트 주소</p>
          </div>
          <div className="my-2 text-gray-600 flex dark:text-blue-200">
            깃헙 아이콘
            <a href="siteMetadata.github">하이</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthorIntro: React.FC = () => {
  return (
    <div className="mb-6">
      <h2 className="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200">
        👋 Hola , Good Day !
      </h2>
      <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  );
};

const Expertise: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="mt-2">
        <h2 className="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
          Frontend
        </h2>

        <ul className="flex flex-wrap gap-4 items-center">
          {/* skill icons
        <!-- <li className="flex items-center">
          <Html className="h-10 w-10 rounded-sm drop-shadow-sm"></Html>
        </li>
        <li className="flex items-center">
          <Css className="h-10 w-10 rounded-sm drop-shadow-sm"></Css>
        </li> -->
        <li className="flex items-center">
          <Bootstrap className="h-10 w-10"></Bootstrap>
        </li>
        <li className="flex items-center">
          <TailwindCss className="h-10 w-10"></TailwindCss>
        </li>
        <li className="flex items-center">
          <Javascript className="h-10 w-10"></Javascript>
        </li>
        <li className="flex items-center">
          <Vuejs className="h-10 w-10"></Vuejs>
        </li>
        <li className="flex items-center">
          <Nuxt className="h-10 w-10"></Nuxt>
          </li> */}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
          Backend
        </h2>
        <ul className="mb-6 flex flex-wrap gap-4">
          <li className="flex items-center">
            {/* <Laravel className="h-10 w-10"></Laravel> */}
          </li>
          <li className="flex items-center">
            {/* <Node className="h-10 w-10"></Node> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

const TimeLine: React.FC = () => {
  return (
    <div className="opacity-100 mt-10">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
              alt=""
            />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Software Engineer at FANG
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Currently
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2018-Currently
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
              alt=""
            />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Freelancer
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 7th, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
              alt=""
            />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            2013 - Dhaka University
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2013 - 2018
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Studied &quot;BSC in Computer Science and Engineering&quot; in Dhaka
            University.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
              alt=""
            />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Born in 1996, July 27
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Dhaka Bangladesh
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            I couldn&apos;t remember any productive work in that time. But
          </p>
        </li>
      </ol>
    </div>
  );
};

const BlogProfileView: React.FC = () => {
  return (
    <div>
      <div className="dark:bg-gray-900 mt-6">
        <div className="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
          <div className="md:w-1/3 p-2 md:flex md:justify-center">
            <AuthorCard />
          </div>
          <div className="md:w-2/3 px-8">
            <AuthorIntro />
            <Expertise />
            <TimeLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogProfileView;
