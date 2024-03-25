import { Categories } from "../../assets/data/data";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "../../Style/Sidebar.scss";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="header_side">
        <div className="Close" onClick={closeSidebar}>
          <IoIosCloseCircleOutline />
        </div>
        <h4 className="Side_title">Categories</h4>
      </div>
      <ul className="list-group list">
        {Categories.map((category, index) => (
          <li key={index}>
            <a href={`#${category.name}`} onClick={closeSidebar}>
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
