import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
const LINKS = [
  {
    path: "/fish",
    title: "Fish",
  },
  {
    path: "/chicken",
    title: "Chicken",
  },
  {
    path: "/vegetables",
    title: "Vegetables",
  },
  {
    path: "/fruits",
    title: "Fruits",
  },
];
const Sidebar = ({ showSidebar }) => {
  const location = useLocation();
  return (
    <div className={`${showSidebar ? "sidebar show" : "sidebar"}`}>
      <nav className="nav">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {LINKS.map((link) => (
              <Link
                className={
                  location.pathname.includes(link.path)
                    ? "sidebarListLink active"
                    : "sidebarListLink"
                }
                to={link.path}
              >
                {link.title}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
