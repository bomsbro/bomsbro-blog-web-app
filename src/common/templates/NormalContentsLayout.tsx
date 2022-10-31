import Link from "next/link";
import React, { type ReactNode } from "react";
import gnbMenu from "../constants/GnbMenu";

interface NormalContentsLayoutProps {
  children: ReactNode;
}

const NormalContentsLayout: React.FC<NormalContentsLayoutProps> = ({ children }) => {
  return (
    <>
      {/* <!-- Menu Nav--> */}
      <nav className="h-3 md:h-auto w-full sticky z-20 top-14 md:relative md:top-0 border-t border-b bg-gray-100 border-gray-300">
        {/* It is MainNav when screen size is more than md */}
        <div className="w-full flex-grow my-4 hidden md:flex md:items-center md:w-auto">
          <div className="w-full container mx-auto flex flex-col md:flex-row items-center justify-center text-md font-bold uppercase mt-0 px-6 py-2">
            {gnbMenu.map(menu => {
              return (
                <Link key={menu.key} href={menu.path}>
                  <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">{menu.name}</a>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="py-6 w-full px-3">{children}</section>
    </>
  );
};

export default NormalContentsLayout;
