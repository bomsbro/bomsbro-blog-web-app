import React from "react";

const TopNavSideDrawer: React.FC = () => {
  return (
    <div className="block sm:hidden">
      <a
        href="#"
        className="block sm:hidden text-base font-bold uppercase text-center flex justify-center items-center"
      >
        Topics <i className="fas ml-2" />
      </a>

      <div
        className="relative z-10"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Blurry background */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        {/* Drawer */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto relative w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Panel title
                    </h2>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div
                        className="h-full border-2 border-dashed border-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavSideDrawer;
