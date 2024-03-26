import {  Row } from "reactstrap";
import ToolCard from "../Components/Card/Card";
import "../Style/Content.scss";

const Content = ({ data }) => {
  return (
    <div className="Content">
      <div className="container pt-5">
        {data.map((category) => (
          <div key={category.name}>
            <h5 className="Cat_title" id={category.name} key={category.name}>
              <span className="icon"> {category.icon}</span> {category.name}
            </h5>
            <Row>
              {category.tools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
