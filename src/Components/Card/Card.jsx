import { Col } from "reactstrap";
import "../../Style/Card.scss";
import { IoIosArrowForward } from "react-icons/io";

const ToolCard = ({ tool }) => {
  return (
    <Col lg={4} md={6} sm={12}>
      <div className="Card">
        <div className="heading">
          <p className="name">
            <a href={tool.link} target="_blank" rel="noopener noreferrer">
              {tool.name}
            </a>
          </p>
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow"
          >
            <IoIosArrowForward />
          </a>
        </div>

        <p className="description">{tool.description}</p>
      </div>
    </Col>
  );
};

export default ToolCard;
