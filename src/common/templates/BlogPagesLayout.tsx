import React, { ReactNode, useEffect, useRef, useState } from "react";
import MainNavSideDrawer from "@src/common/components/outfits/MainNavSideDrawer";
import SignInDialog from "@common/components/outfits/SignInDialog";
import { SearchIcon, MenuIcon, HomeIcon } from "@heroicons/react/outline";
// import GnbHamburgerButton from "@common/components/atoms/GnbHamburgerButton";
import Link from "next/link";

interface BlogPagesLayoutProps {
  children: ReactNode;
  headerTitle?: string;
  mainTitle?: string;
  subTitle?: string;
  SubMenu?: ReactNode;
}

const BlogPagesLayout: React.FC<BlogPagesLayoutProps> = ({
  headerTitle,
  mainTitle,
  subTitle,
  children,
  SubMenu,
}) => {
  const [MenuDrawerVisible, setMenuDrawerVisible] = useState<boolean>(false);
  const [signInDialogVisible, setSignInDialogVisible] = useState<boolean>(false);
  const [titleVisible, setTitleVisible] = useState<boolean>(false);
  const headerTextRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entry => {
        if (entry[0].intersectionRatio < 0.3) setTitleVisible(true);
        else setTitleVisible(false);
      },
      { threshold: 0.3 },
    );
    observer.observe(headerTextRef.current as Element);
    return () => observer.disconnect();
  }, []);

  const initModals = () => {
    setMenuDrawerVisible(false);
    setSignInDialogVisible(false);
  };

  const handleClickMenu = async () => {
    initModals();
    setMenuDrawerVisible(true);
  };
  const handleClickSignIn = async () => {
    initModals();
    setSignInDialogVisible(true);
  };

  return (
    <>
      <title>{`Bomsbro's Blog - ${headerTitle}`}</title>
      {/* <!-- Top Bar Nav --> */}
      <nav className="fixed items-center flex w-full z-20 h-14 md:relative bg-blue-800 shadow">
        <nav className="flex flex-nowrap container max-w-screen-xl w-full mx-auto items-center text-sm text-white  no-underline">
          <div className="flex flex-none items-center">
            <div className="ml-3 md:hidden">
              <Link href="/">
                <HomeIcon className="w-6 h-6 m-1" />
              </Link>
            </div>
          </div>
          <div className="flex flex-auto items-center justify-center font-bold text-lg uppercase">
            {titleVisible && <h1 className="md:hidden animate-title-appear">{headerTitle}</h1>}
            <h1>{titleVisible}</h1>
          </div>
          <div className="flex flex-none flex-row-reverse items-center md:hidden">
            <div className="mr-2">
              <MenuIcon className="w-6 h-6 m-1" onClick={handleClickMenu} />
            </div>
            <div className="mr-1">
              <SearchIcon className="w-6 h-6 m-1" />
            </div>
          </div>
        </nav>
      </nav>
      {/* Dummy Elem for Fixed header */}
      <div className="h-14 md:hidden" />
      {/* <!-- Text Header --> */}
      <header ref={headerTextRef} className="h-44 md:pt-0 w-full container mx-auto">
        <div className="container max-w-screen-xl w-full mx-auto flex flex-col items-center py-12">
          <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
            {mainTitle || headerTitle}
          </a>
          <p className="text-lg text-gray-600">{subTitle}</p>
        </div>
      </header>

      {/* <!-- Contents --> */}
      <div className="container min-h-full max-w-screen-xl w-full mx-auto">{children}</div>

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
        <MainNavSideDrawer
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
