import { MenuAlt2Icon } from "@heroicons/react/outline";
import React from "react";

const BlogPostListView: React.FC = () => {
  return (
    <>
      {/* Content Area */}
      <div className="flex flex-wrap py-6">
        {/* Sidebar Section */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          {/* Mobile MenuBar */}
          <div className="w-full md:hidden pt-1 pb-2 container mx-auto flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <MenuAlt2Icon
                className="w-7 h-7 ml-1 mr-4"
                onClick={() => console.log("하이")}
              />
              <p>Post Categories</p>
            </div>
          </div>
          {/* Web Menu SideBar */}
          <div className="hidden md:flex w-full bg-white shadow flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              Profile
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Settings
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Messages
            </li>
            <a
              href="#"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </a>
          </div>
        </aside>
        {/* Posts Section */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow my-4">
            {/* Article Image */}
            <a href="#" className="hover:opacity-75">
              <img
                src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
                alt=""
              />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="#"
                className="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                Technology
              </a>
              <a
                href="#"
                className="text-3xl font-bold hover:text-gray-700 pb-4"
              >
                Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
              </a>
              <p className="text-sm pb-3">
                By{" "}
                <a href="#" className="font-semibold hover:text-gray-800">
                  David Grzyb
                </a>
                , Published on April 25th, 2020
              </p>
              <a href="#" className="pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus,
                quis iaculis dui porta volutpat. In sit amet posuere magna..
              </a>
              <a href="#" className="uppercase text-gray-800 hover:text-black">
                Continue Reading <i className="fas fa-arrow-right" />
              </a>
            </div>
          </article>
          {/* Pagination */}
          <div className="flex items-center py-8">
            <a
              href="#"
              className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
            >
              1
            </a>
            <a
              href="#"
              className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
            >
              2
            </a>
            <a
              href="#"
              className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
            >
              Next <i className="fas fa-arrow-right ml-2" />
            </a>
          </div>
        </section>
      </div>
      ;
    </>
  );
};

export default BlogPostListView;
