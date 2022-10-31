import { MenuAlt2Icon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState, type ReactNode } from "react";
import SubNavBottomDrawer from "../components/outfits/SubNavBottomDrawer";
import gnbMenu from "../constants/GnbMenu";

interface SubMenuContentsLayoutProps {
  subMenuTitle: string;
  SubMenu: ReactNode;
  children: ReactNode;
  rowReverse?: boolean;
}

const SubMenuContentsLayout: React.FC<SubMenuContentsLayoutProps> = ({
  subMenuTitle,
  SubMenu,
  children,
  rowReverse = false,
}) => {
  const [subNavOpen, setSubNavOpen] = useState<boolean>(false);
  return (
    <>
      {/* <!-- Menu Nav--> */}
      <nav className="w-full sticky z-20 top-14 md:relative md:top-0 border-t border-b bg-gray-100 border-gray-300">
        {/* Mobile MenuBar */}
        <div className="w-full h-14 md:hidden container mx-auto flex flex-wrap items-center justify-between ">
          <div className="flex items-center">
            {SubMenu && (
              <MenuAlt2Icon
                className="w-7 h-7 ml-1 mr-4"
                onClick={() => {
                  setSubNavOpen(true);
                  // window.scrollBy({ top: 200, behavior: "smooth" });
                }}
              />
            )}
            <p>{subMenuTitle}</p>
          </div>
        </div>
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

      <div className={`flex flex-wrap py-6 ${rowReverse && "flex-row-reverse"}`}>
        {/* Content */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">{children}</section>
        {/* Web SideBar */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="hidden md:flex w-full bg-white shadow flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">{subMenuTitle}</p>
            {SubMenu}
          </div>
        </aside>
      </div>
      {SubMenu && subNavOpen && (
        <SubNavBottomDrawer
          title={subMenuTitle}
          SubMenu={SubMenu}
          onClose={async () => {
            setSubNavOpen(false);
          }}
        />
      )}
    </>
  );
};

export default SubMenuContentsLayout;
