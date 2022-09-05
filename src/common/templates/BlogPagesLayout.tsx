import Link from "next/link";
import React, { ReactNode, useState } from "react";
import TopNavSideDrawer from "src/common/components/outfits/TopNavSideDrawer";
import gnbMenu from "@common/constants/GnbMenu";

import SignInDialog from "@common/components/outfits/SignInDialog";
import GnbHamburgerButton from "@common/components/atoms/GnbHamburgerButton";

interface BlogPagesLayoutProps {
  children: ReactNode;
}

const BlogPagesLayout: React.FC<BlogPagesLayoutProps> = ({ children }) => {
  const [MenuDrawerVisible, setMenuDrawerVisible] = useState<boolean>(false);
  const [signInDialogVisible, setSignInDialogVisible] =
    useState<boolean>(false);

  const handleClickMenu = async () => {
    setMenuDrawerVisible(true);
  };
  const handleClickSignIn = async () => {
    setSignInDialogVisible(true);
  };

  return (
    <>
      {/* <!-- Top Bar Nav --> */}
      <nav className="fixed w-full z-20 h-14 sm:relative py-4 bg-blue-800 shadow">
        <nav className="container max-w-screen-xl w-full mx-auto flex flex-wrap items-center justify-between">
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
          <div className="flex items-center pr-6 ">
            <button
              type="button"
              onClick={handleClickSignIn}
              className="bg-white"
            >
              SignIn
            </button>
            <GnbHamburgerButton onClick={handleClickMenu} />
          </div>
        </nav>
      </nav>

      {/* <!-- Text Header --> */}
      <header className="pt-14 sm:pt-0 w-full container mx-auto">
        <div className="container max-w-screen-xl w-full mx-auto flex flex-col items-center py-12">
          <a
            className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
            href="#"
          >
            Bomsbro
          </a>
          <p className="text-lg text-gray-600">FE Developer</p>
        </div>
      </header>

      {/* <!-- Menu Nav Web--> */}
      <nav className="w-full py-4 border-t border-b bg-gray-100">
        <div className="w-full flex-grow hidden sm:flex sm:items-center sm:w-auto">
          <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            {gnbMenu.map((menu) => {
              return (
                <Link key={menu.key} href={menu.path}>
                  <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                    {menu.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* <!-- Contents --> */}
      <div className="container max-w-screen-xl w-full mx-auto">{children}</div>

      {/* <!-- Footer --> */}
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
              Terms &amp; Conditions
            </a>
            <a href="#" className="uppercase px-3">
              Contact Us
            </a>
          </div>
          <div className="uppercase pb-6">&copy; myblog.com</div>
        </div>
      </footer>

      {/* <!--Global Menu Drawer --> */}
      {MenuDrawerVisible && (
        <TopNavSideDrawer
          handleClose={async () => {
            setMenuDrawerVisible(false);
          }}
        />
      )}
      {/* <!--SignIn Dialog --> */}
      {signInDialogVisible && (
        <SignInDialog
          handleClose={async () => {
            setSignInDialogVisible(false);
          }}
        />
      )}
    </>
  );
};

export default BlogPagesLayout;
