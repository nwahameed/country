import React from "react";

const Background = ({ color, text, isBlue }) => {
  if (isBlue) {
    return null;
  }
  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      {text}
    </div>
  );
};

export default Background;
