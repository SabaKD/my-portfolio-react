import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/Logo.png";

export default function NavigationBar() {
  const handleHashLinkClick = (event, id) => {
    // Check if current location is homepage
    if (window.location.pathname === "/") {
      event.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: "start"});
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
                to="/"
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
                to="/"
                className="navMenu"
                title="Saba's UX Projects"
                activeClassName="active"
                rel="noreferrer"
                isActive={() => false} // Prevent this link from getting the active class
                onClick={(e) => handleHashLinkClick(e, 'UXProjects')}
              >
                UX Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="navMenu"
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
                className="navMenu"
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
