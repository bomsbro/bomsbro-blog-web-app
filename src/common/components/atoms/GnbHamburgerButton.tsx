import React, { MutableRefObject, useEffect, useRef } from "react";
import lottie from "lottie-web";
import hamburger from "@common/assets/hamburger-lottie.json";

interface GnbHamburgerButtonProps {
  isOpened?: boolean;
  onClick(): void;
}

const GnbHamburgerButton: React.FC<GnbHamburgerButtonProps> = ({ isOpened, onClick }) => {
  const lottieIcon: MutableRefObject<any> = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieIcon.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: hamburger,
    });
  }, []);

  const handleClickButton = () => {
    onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClickButton}
      className="flex justify-center align-middle w-8 h-8 overflow-hidden"
    >
      <div className="w-8 h-8" ref={lottieIcon} />
    </button>
  );
};

export default GnbHamburgerButton;
