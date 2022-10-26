import { ReactNode, useEffect } from "react";
import ReactDom from "react-dom";

interface ModalPortalProps {
  children: ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    window.document.body.style.overflow = "hidden";
    return () => {
      window.document.body.style.overflow = "unset";
    };
  }, []);

  return ReactDom.createPortal(children, modalRoot as Element);
};

export default ModalPortal;
