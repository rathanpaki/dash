import React, { useState } from "react";
import "../css/sidebar.css";
import { FaHome, FaUser, FaList, FaRegStar, FaCog, FaKey, FaLock, FaPowerOff } from "react-icons/fa";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
      {/* Sidebar Toggle Button */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <i className={`icon-toggle ${isSidebarOpen ? "close-icon" : "menu-icon"}`}></i>
      </div>

      {/* Logo Section */}
      {isSidebarOpen && (
        <div className="logo">
          <h2>Star Travels</h2>
        </div>
      )}

      {/* Menu Items */}
      <ul className="menu">
        <li>
          <a href="#" className="menu-item active">
            <FaHome className="menu-icon" />
            <span className="menu-text">Dashboard</span>
          </a>
        </li>

        <li>
          <div
            onClick={() => toggleSection("users")}
            className={`menu-item ${openSections["users"] ? "active" : ""}`}
          >
            <FaUser className="menu-icon" />
            <span className="menu-text">Users</span>
            <i className="icon-arrow"></i>
          </div>
          {openSections["users"] && isSidebarOpen && (
            <ul className="submenu">
              <li><a href="#">Add User</a></li>
              <li><a href="#">Manage Users</a></li>
            </ul>
          )}
        </li>

        <li>
          <div
            onClick={() => toggleSection("listing")}
            className={`menu-item ${openSections["listing"] ? "active" : ""}`}
          >
            <FaList className="menu-icon" />
            <span className="menu-text">Listing</span>
            <i className="icon-arrow"></i>
          </div>
          {openSections["listing"] && isSidebarOpen && (
            <ul className="submenu">
              <li><a href="#">Add Listing</a></li>
              <li><a href="#">View Listings</a></li>
            </ul>
          )}
        </li>

        <li>
          <a href="#" className="menu-item">
            <FaRegStar className="menu-icon" />
            <span className="menu-text">Reviews</span>
          </a>
        </li>
      </ul>

      {/* Footer Icons */}
      <div className="footer-icons">
        <FaCog className="footer-icon" />
        <FaKey className="footer-icon" />
        <FaLock className="footer-icon" />
        <FaPowerOff className="footer-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
