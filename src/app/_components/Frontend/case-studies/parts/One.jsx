import React from "react";
import "./Coaching.css"
const One = ({data}) => {
  return (
    <div
      className="coaching-section"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
};

export default One;
