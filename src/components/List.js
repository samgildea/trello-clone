import React from "react";
import Card from "./Card";
import "../components/list.scss";

const List = ({ name, cards }) => {
  return (
    <div className="list">
      <h1 className="list-title">{name}</h1>
      {cards.map(task => (
        <Card title={task.title} />
      ))}
    </div>
  );
};

export default List;
