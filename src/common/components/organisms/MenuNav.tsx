import Link from "next/link";
import React, { ReactNode, useState } from "react";
import gnbMenu from "@common/constants/GnbMenu";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import SubNavBottomDrawer from "../outfits/SubNavBottomDrawer";

interface MenuNavProps {
  SubMenu: ReactNode;
}
const MenuNav: React.FC<MenuNavProps> = ({ SubMenu }) => {
  const [subNavOpen, setSubNavOpen] = useState<boolean>(false);
  return (
    <>
      {/* <!-- Menu Nav--> */}
      <nav className="w-full sticky z-20 top-14 md:relative md:top-0 border-t border-b bg-gray-100 border-gray-300">
        {/* Mobile MenuBar */}
        <div className="w-full h-14 md:hidden container mx-auto flex flex-wrap items-center justify-between ">
          <div className="flex items-center">
            <MenuAlt2Icon
              className="w-7 h-7 ml-1 mr-4"
              onClick={() => {
                setSubNavOpen(true);
                // window.scrollBy({ top: 200, behavior: "smooth" });
              }}
            />
            <p>Post Categories</p>
          </div>
        </div>
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
      {subNavOpen && (
        <SubNavBottomDrawer
          onClose={async () => {
            setSubNavOpen(false);
          }}
        />
      )}
    </>
  );
};

export default MenuNav;
