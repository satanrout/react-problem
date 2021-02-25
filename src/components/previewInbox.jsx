import React from "react";
import "./preview.css";
import { Link } from "react-router-dom";

const PreviewInbox = ({ inbox }) => {
  return (
    <div>
      {inbox.map((data) => {
        return (
          <Link className="link" to={`/${data.mId}`}>
            <div className="preview-row">
              <div className="from">{data.from}</div>
              <div className="subject">{data.subject}</div>
              <div className="content">{data.content}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PreviewInbox;
