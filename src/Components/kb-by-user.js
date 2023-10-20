import React, { useState, useEffect } from "react";
import "../styles.css";
import { Card } from "./Card";
import KanbanBoardHeader from "./kb-header";

export default function KanbanBoardByUser(props) {
  const userElements = [];

  getTicketsForUser = (user) => {
    const userTicketsList = props.data.get(user.id);
    console.log("bhai", userTicketsList);
    const userTickets = [];
    userTicketsList.forEach((ticket) => {
      userTickets.push(
        <div key={ticket.id} className="userHeader2" id={ticket.id}>
          <Card cam={ticket.id} title={ticket.title} tag="I am tag" />
        </div>
      );
    });
    return userTickets;
  };

  props.users.forEach((user) => {
    userElements.push(
      <div key={user.id} className="userHeader" id={user.id}>
        <KanbanBoardHeader name={user.name} />
        {getTicketsForUser(user)}
      </div>
    );
  });
  return <div class="kbByUserContainer">{userElements}</div>;
}
