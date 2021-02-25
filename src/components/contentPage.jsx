import React from "react";
import "./content.css";
import { inbox } from "../inbox ";
import { useParams } from "react-router-dom";

const ContentPage = () => {
  let { details } = useParams();
  const contentObject = inbox.find((data) => data.mId === details);
  console.log(contentObject);
  return (
    <div className="content-page">
      {contentObject ? (
        <div>
          <h2 className="subject-content">{contentObject.subject}</h2>
          <p className="from-content">{contentObject.from}</p>
          <p className="content-content">{contentObject.content}</p>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default ContentPage;
