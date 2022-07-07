import Link from "next/link";
import React, { ReactNode } from "react";

interface BlogPagesLayoutProps {
  children: ReactNode;
}

const BlogPagesLayout: React.FC<BlogPagesLayoutProps> = ({ children }) => {
  return (
    <>
      {/* <!-- Top Bar Nav --> */}
      <nav className="w-full py-4 bg-blue-800 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
          <nav>
            <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
              <li>
                <a
                  className="hover:text-gray-200 hover:underline px-4"
                  href="blog/home"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-200 hover:underline px-4"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center text-lg no-underline text-white pr-6">
            <a className="" href="#">
              <i className="fab fa-facebook" />
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-instagram" />
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-twitter" />
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </nav>
      {/* <!-- Text Header --> */}
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <a
            className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
            href="#"
          >
            Minimal Blog
          </a>
          <p className="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
        </div>
      </header>
      {/* <!-- Topic Nav --> */}
      <nav
        className="w-full py-4 border-t border-b bg-gray-100"
        x-data="{ open: false }"
      >
        <div className="block sm:hidden">
          <a
            href="#"
            className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
          >
            Topics <i className="fas ml-2" />
          </a>
        </div>
        <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            <Link href="/blog/home">
              <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Home</a>
            </Link>
            <Link href="/blog/profile">
              <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Profile
              </a>
            </Link>
            <Link href="/blog/project">
              <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Project
              </a>
            </Link>
            <Link href="/blog/technology">
              <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Technology
              </a>
            </Link>
            <Link href="/blog/board">
              <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Board</a>
            </Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="w-full border-t bg-white pb-12">
        <div className="w-full container mx-auto flex flex-col items-center">
          <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
            <a href="#" className="uppercase px-3">
              About Us
            </a>
            <a href="#" className="uppercase px-3">
              Privacy Policy
            </a>
            <a href="#" className="uppercase px-3">
              Terms & Conditions
            </a>
            <a href="#" className="uppercase px-3">
              Contact Us
            </a>
          </div>
          <div className="uppercase pb-6">&copy; myblog.com</div>
        </div>
      </footer>
    </>
  );
};

export default BlogPagesLayout;
