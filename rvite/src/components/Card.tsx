import React, { PropsWithChildren } from "react";

interface CardProps {
  title: string;
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({ title, children }) => {
  return (
    <div style={{ border: "5px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;