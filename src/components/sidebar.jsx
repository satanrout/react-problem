import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="search">
        <input type="text" placeholder="Search Mail and People" />
      </div>

      <div className="folder">
        <h3>Folder</h3>
        <ul className="sidebar-list">
          <li onClick={() => console.log(this)}>Inbox</li>
          <li>Junk Email</li>
          <li>Drafts</li>
          <li>Sent Items</li>
          <li>Deleted Items</li>
          <li>Archive</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
