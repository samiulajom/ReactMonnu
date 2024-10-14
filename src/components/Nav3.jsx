import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./../assets/css/Nav.css"; // Assuming you have some custom styles
import { menuList } from "./../assets/data/data";
import introImg from "../assets/image/nav/intro.png";

const Nav = () => {
  const [activeItem, setActiveItem] = useState(1); // Track the active item
  const location = useLocation(); // Now it works because Nav is inside Router
  const isHomePage = location.pathname === "/";
  const handleClick = (index) => {
    setActiveItem(index);
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg mu-parentNav position-fixed w-100 protest top-0 ${
          isHomePage ? "home-navbar" : ""
        }`}
      >
        <div className="container mu-container">
          <a className="navbar-brand mu-logo fw-bold" href="#">
            MONNU<span className="text-light">.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon me-5"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mu-navbar">
              {menuList.map((item) => (
                <li key={item.id} className="nav-item">
                  <Link
                    className={`nav-link ${
                      activeItem === item.id ? "active" : ""
                    }`}
                    to={item.Url}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className=" mu-intro gap-2">
              <a href="#">intro</a>
              <img src={introImg} alt="intro" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
