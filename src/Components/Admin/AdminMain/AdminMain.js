import { faAdd, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminMain.css";
const AdminMain = () => {
  return (
    <div className="admin-main">
      <div className="admin-left">
        <div className="admin-logo">
          <h1>LOGO</h1>
        </div>
        <div className="admin-navlinks">
          <NavLink to="/admin/donner-list">
            <FontAwesomeIcon icon={faPeopleGroup} /> Donner list
          </NavLink>
          <NavLink to="/admin/add-event">
            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> Add event
          </NavLink>
        </div>
      </div>
      <div className="admin-right">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminMain;
