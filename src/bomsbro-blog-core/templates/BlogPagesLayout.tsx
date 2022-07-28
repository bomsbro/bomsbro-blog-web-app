import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import TopNavSideDrawer from "@bomsbro-blog-core/components/outfits/TopNavSideDrawer";

interface BlogPagesLayoutProps {
  children: ReactNode;
}

const BlogPagesLayout: React.FC<BlogPagesLayoutProps> = ({ children }) => {
  const [topNaviDrawerVisible, setTopNavDrawerVisible] =
    useState<boolean>(false);

  const handleClickTopNavMenuButton = async () => {
    setTopNavDrawerVisible(true);
  };

  return (
    <>
      {/* <!-- Top Bar Nav --> */}
      <nav className="w-full py-4 bg-blue-800 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
          <nav>
            <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline pl-4 ">
              <li>
                <Link href="/blog/home">
                  <a
                    className="hover:text-gray-200 hover:underline px-4"
                    href="blog/home"
                  >
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center pr-6 sm:hidden">
            <MenuIcon
              className="w-7 h-7 text-white"
              onClick={handleClickTopNavMenuButton}
            />
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
            Bomsbro
          </a>
          <p className="text-lg text-gray-600">FE Developer</p>
        </div>
      </header>

      {/* <!-- Topic Nav --> */}
      <nav className="w-full py-4 border-t border-b bg-gray-100">
        <div className="w-full flex-grow hidden sm:flex sm:items-center sm:w-auto">
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
            <Link href="/blog/posts">
              <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">posts</a>
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

      {/* <!--TopNav Mobile Haburger Drawer --> */}
      {topNaviDrawerVisible && <TopNavSideDrawer />}
    </>
  );
};

export default BlogPagesLayout;
