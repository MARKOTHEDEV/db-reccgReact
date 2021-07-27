import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const BackToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scroll = () => window.scrollTo({ top: 0, behaviour: "smooth" });

  if (!visible) {
    return false;
  }
  return (
    <div
      className="scroll-to-top mr-5 text-xl fixed rounded-full flex justify-center bg-primary text-white cursor-pointer"
      onClick={scroll}
    >
      <svg
        className="icon2"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="#fff" d="M12 0l8 9h-6v15h-4v-15h-6z" />
      </svg>
    </div>
  );
};

export default BackToTop;
