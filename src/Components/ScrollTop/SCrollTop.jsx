import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import "../../Style/ScrollTop.scss";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll button visibility
  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollBtnVisibility);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    showButton && (
      <div className="scrolltop" id="ScrollTop" onClick={scrollToTop}>
        <div className="scrollIcon">
          <MdKeyboardDoubleArrowUp />
        </div>
      </div>
    )
  );
};

export default ScrollTop;
