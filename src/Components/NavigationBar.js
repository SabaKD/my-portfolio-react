import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/Logo.png";

export default function NavigationBar() {
  const handleHashLinkClick = (e, id) => {
    // Check if current location is homepage
    if (window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="NavigationBar sticky-top">
      <div className="container">
        <nav className="d-flex justify-content-between">
          <NavLink to="/">
            <img src={logo} alt="Saba Logo" className="logo" rel="noreferrer" />
          </NavLink>
          <ul>
            <li>
              <NavLink
                exact
                to="/#Hero"
                className="navMenu"
                activeClassName="active"
                title="Homepage"
                onClick={(e) => handleHashLinkClick(e, 'Hero')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#UXProjects"
                className="navMenu deactive"
                title="Saba's UX Projects"
                rel="noreferrer"
                isActive={() => false} // Prevent this link from getting the active class
                onClick={(e) => handleHashLinkClick(e, 'UXProjects')}
              >
                UX Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#ReactProjects"
                className="navMenu dis"
                title="Saba's React Projects"
                rel="noreferrer"
                isActive={() => false} // Prevent this link from getting the active class
                onClick={(e) => handleHashLinkClick(e, 'ReactProjects')}
              >
                React Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Aboutme"
                className="navMenu dis"
                activeClassName="active"
                title="About Saba"
                rel="noreferrer"
              >
                About me
              </NavLink>
            </li>
            <li>
              <a
                href="https://calendly.com/washingintroduction/30-mins-with-saba?month=2024-02"
                className="btn primary-button"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a call
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
