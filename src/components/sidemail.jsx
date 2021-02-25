import React from "react";
import "./sidemail.css";
import { inbox } from "../inbox ";
import PreviewInbox from "./previewInbox";

const Sidemail = () => {
  return (
    <div className="sidemail">
      <div className="sidemail-top">
        <span>New</span> <span>Mark All As Read</span>
      </div>
      <div className="sidemail-container">
        <div>
          <span className="focused">Focused</span>
          <span className="other">Other</span>
          <span className="filter">Filter</span>
        </div>
        <div className="email-content">
          <PreviewInbox key={inbox.mId} inbox={inbox} />
        </div>
      </div>
    </div>
  );
};

export default Sidemail;
