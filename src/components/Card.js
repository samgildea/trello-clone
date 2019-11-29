import React from "react";
import "../components/card.scss";

const Card = ({ title }) => {
    
  return (
      
    <div className="card">
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
