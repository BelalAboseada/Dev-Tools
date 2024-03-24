import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBarsStaggered, FaMoon, FaSun } from "react-icons/fa6";
import "../../Style/Header.scss";
const Header = ({ toggleSidebar }) => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${show}`}>
      <div className="container">
        <div className="left">
          <div className="Toggle_side" onClick={toggleSidebar}>
            <FaBarsStaggered />
          </div>
        </div>
        <div className="Center text-center" onClick={() => navigate("/")}>
          <h4 className="title">
            <span className="title-text">Dev Tools</span>
          </h4>
        </div>
        <div className="right">
          <div className="Theme_Toggle">
            <input type="checkbox" id="theme-toggler" />
            <label htmlFor="theme-toggler" className="label">
              <FaMoon className="moon" />
              <FaSun className="sun" />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
