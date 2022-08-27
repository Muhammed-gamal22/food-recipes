import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import Svg from "./Svg";
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

const Header = ({ setShowSidebar, showSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <Svg width="50px" />
      </div>
      {(location.pathname === "/fish" ||
        location.pathname === "/chicken" ||
        location.pathname === "/vegetables" ||
        location.pathname === "/fruits") && (
        <>
          <nav className="nav">
            <ul className="headerList">
              <li className="headerListItem">
                {LINKS.map((link) => (
                  <Link
                    className={
                      location.pathname.includes(link.path)
                        ? "headerListLink header-active"
                        : "headerListLink"
                    }
                    to={link.path}
                  >
                    {link.title}
                  </Link>
                ))}
              </li>
            </ul>
          </nav>

          <div
            className={` ${showSidebar ? "menu menu-active" : "menu"}`}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
