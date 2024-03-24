import "../../Style/Footer.scss";
import GitHub from "../../assets/images/github.svg";

const Footer = () => {
  return (
    <div className="Footer text-center">
      <div className="container">
        <p className="opensource">
          The project is open source and you can access it from{" "}
          <a
            target="_blank"
            href="https://github.com/BelalAboseada/Age-Calculator"
          >
            <img src={GitHub} loading="lazy" alt="GitHub" />
          </a>
        </p>
        <p className="portfolio">
          <a target="_blank" href="https://belal-portfolio.vercel.app/">
            Portfolio
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
