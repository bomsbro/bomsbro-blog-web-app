import AboutMe from "@home/components/AboutMe";
import InstaGallery from "@home/components/InstaGallery";
import React from "react";

const BlogHomeView = () => {
  return (
    <>
      {/* Content Area */}
      <div className="flex flex-wrap py-6">
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

          <article className="flex flex-col shadow my-4">
            {/* Article Image */}
            <a href="#" className="hover:opacity-75">
              <img
                src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
                alt=""
              />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="#"
                className="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                Automotive, Finance
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
                , Published on January 12th, 2020
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

          <article className="flex flex-col shadow my-4">
            {/* Article Image */}
            <a href="#" className="hover:opacity-75">
              <img
                src="https://source.unsplash.com/collection/1346951/1000x500?sig=3"
                alt=""
              />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="#"
                className="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                Sports
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
                , Published on October 22nd, 2019
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

        {/* Sidebar Section */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <AboutMe />
          <InstaGallery />
        </aside>
      </div>
    </>
  );
};

export default BlogHomeView;
