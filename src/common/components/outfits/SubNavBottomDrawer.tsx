import gnbMenu from "@src/common/constants/GnbMenu";
import React from "react";
import ModalPortal from "./ModalPortal";

interface SubNavBottomDrawerProps {
  onClose(): Promise<void>;
}

const SubNavBottomDrawer: React.FC<SubNavBottomDrawerProps> = ({ onClose }) => {
  return (
    <ModalPortal>
      {/* Back Drop */}
      <div
        className="fixed inset-0 w-full h-full z-30 bg-gray-700 bg-opacity-75 md:hidden"
        onClick={onClose}
        onKeyDown={onClose}
        role="button"
        tabIndex={0}
      >
        {/* Bottom Drawer */}
        <section className="fixed box-border bottom-0 right-0 w-full h-2/3 rounded-t-3xl bg-white overflow-auto animate-bottom-draw z-50 transform md:hidden">
          <div className="flex w-full h-11 items-center justify-end">
            <button type="button" onClick={onClose}>
              X
            </button>
          </div>
          <span className="flex w-full items-center p-4 border-b">
            <img
              width={300}
              height={300}
              src="https://picsum.photos/300/300"
              alt="Logo"
              className="h-auto w-32 mx-auto"
            />
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
              <p>
                <span className="font-bold">Buy me a Coffee</span>
                <br />
                <span className="text-md text-white">Help me keep this site alive</span>
              </p>
            </a>
          </div>
        </section>
      </div>
    </ModalPortal>
  );
};

export default SubNavBottomDrawer;
