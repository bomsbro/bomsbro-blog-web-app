import React, { ReactNode } from "react";
import ModalPortal from "./ModalPortal";

interface SubNavBottomDrawerProps {
  onClose(): Promise<void>;
  children: ReactNode;
}

const SubNavBottomDrawer: React.FC<SubNavBottomDrawerProps> = ({ onClose, children }) => {
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
        <section className="fixed box-border bottom-0 right-0 w-full rounded-t-3xl bg-white overflow-auto animate-bottom-draw z-50 transform md:hidden">
          <div className="flex w-full h-11 items-center justify-end">
            <button type="button" onClick={onClose}>
              X
            </button>
          </div>
          <div>{children}</div>
        </section>
      </div>
    </ModalPortal>
  );
};

export default SubNavBottomDrawer;
