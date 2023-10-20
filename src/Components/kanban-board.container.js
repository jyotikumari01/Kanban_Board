import React, { useState, useEffect } from "react";
import KanbanBoard from "./kanban-board";
import "../styles.css";

export default function KanbanBoardContainer() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment ")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return data ? <KanbanBoard data={data} /> : <p>Loading...</p>;
}
