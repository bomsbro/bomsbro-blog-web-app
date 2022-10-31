import gnbMenu from "@src/common/constants/GnbMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { type ReactNode } from "react";

interface SubAppBarProps {
  mobile?: ReactNode;
}

const SubAppBar: React.FC<SubAppBarProps> = ({ mobile }) => {
  const router = useRouter();
  const currentPath = router.pathname.split("/")[1];
  return (
    <nav className="w-full sticky z-20 top-14 md:relative md:top-0 border-t border-b bg-gray-100 border-gray-300">
      {/* Mobile MenuBar */}
      {mobile && (
        <div className="w-full h-14 md:hidden container mx-auto flex flex-wrap items-center">
          {mobile}
        </div>
      )}
      <div className="w-full flex-grow my-4 hidden md:flex md:items-center md:w-auto">
        <div className="w-full container mx-auto flex flex-col md:flex-row items-center justify-center text-md font-bold uppercase mt-0 px-6 py-2">
          {gnbMenu.map(menu => {
            if (`/${currentPath}` === menu.path)
              return (
                <Link key={menu.key} href={menu.path}>
                  <a className="bg-gray-400 rounded py-2 px-4 mx-2">{menu.name}</a>
                </Link>
              );

            return (
              <Link key={menu.key} href={menu.path}>
                <a
                  className={`rounded py-2 px-4 mx-2 `.concat(
                    `/${currentPath}` === menu.path ? "bg-gray-400" : "hover:bg-gray-200",
                  )}
                >
                  {menu.name}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SubAppBar;
