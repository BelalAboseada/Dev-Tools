import { Container, Row } from "reactstrap";
import ToolCard from "../Components/Card/Card";
import "../Style/Content.scss"

const Content = ({ data }) => {
  return (
    <div className="Content">
      <Container className="pt-5">
        {data.map((category) => (
          <div key={category.name}>
            <h5 className="Cat_title">{category.name}</h5>
            <Row>
              {category.tools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Content;