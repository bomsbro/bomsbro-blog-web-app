import gnbMenu from "@common/constants/GnbMenu";
import React from "react";
import ModalPortal from "./ModalPortal";

interface TopNavSideDrawerProps {
  handleClose(): Promise<void>;
}

const TopNavSideDrawer: React.FC<TopNavSideDrawerProps> = ({ handleClose }) => {
  return (
    <ModalPortal>
      {/*
        <transition
          enter-className="opacity-0"
          enter-active-className="ease-out transition-medium"
          enter-to-className="opacity-100"
          leave-className="opacity-100"
          leave-active-className="ease-out transition-medium"
          leave-to-className="opacity-0"
        >
          <div
            v-show="isOpen"
            className="z-10 fixed inset-0 transition-opacity"
          >
            <div
              className="absolute inset-0 bg-black opacity-50"
              tabIndex="0"
            />
          </div>
        </transition>
      */}
      <div
        className="fixed inset-0 w-full h-full z-30 bg-gray-700 bg-opacity-75 transition-opacity sm:hidden"
        onClick={handleClose}
        onKeyDown={handleClose}
        role="button"
        tabIndex={0}
      >
        <aside className="fixed h-full top-0 left-0 w-64 bg-white overflow-auto ease-in-out transform transition-all duration-300 z-50 rounded-tr-3xl">
          <span className="flex w-full items-center p-4 border-b">
            <img src="/logos/fox-hub.png" alt="Logo" className="h-auto w-32 mx-auto" />
          </span>
          {gnbMenu.map(item => {
            return (
              <a key={item.key} href={item.path}>
                <span className="flex items-center p-4 hover:bg-indigo-500 hover:text-white ">
                  <span className="mr-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </span>
                  <span>{item.name}</span>
                </span>
              </a>
            );
          })}

          <div className="fixed bottom-0 w-full">
            <button
              type="button"
              className="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full"
            >
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6 mr-2"
              >
                <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>Share</span>
            </button>
            <a
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-orange-700 text-white "
              href="https://www.buymeacoffee.com/fayazahmed"
              target="_blank"
            >
              <img className="mr-2 h-8 w-auto" src="/sidebar/bmc.svg" alt="Buy Me Coffee" />
              <p>
                <span className="font-bold">Buy me a Coffee</span>
                <br />
                <span className="text-sm text-white">Help me keep this site alive</span>
              </p>
            </a>
          </div>
        </aside>
      </div>
    </ModalPortal>
  );
};

export default TopNavSideDrawer;
