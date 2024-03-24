import { Col } from "reactstrap";
import "../../Style/Card.scss";
import { IoIosArrowForward } from "react-icons/io";

const ToolCard = ({ tool }) => {
  return (
    <Col lg={3} md={4} sm={12}>
      <div className="Card" >
        <a href={tool.link} target="_blank" rel="noopener noreferrer">
          <p>{tool.name}</p>
        </a>
        <div className="arrow">
          <IoIosArrowForward />
        </div>
      </div>
    </Col>
  );
};

export default ToolCard;
