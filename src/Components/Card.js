import React, { useEffect } from "react";
import "./card-styles.css";
import Icon from "./profile-icon.svg";

export function Card(cardProps) {
  return (
    <div class="cardContainer">
      <div class="cardheader">
        <div class="cardId">{cardProps.cam}</div>
        <div class="profileIcon">
          <img src={Icon} />
        </div>
      </div>
      <div class="cardBody">
        <div>
          <input type="checkbox" className="rounded-checkbox" />
        </div>
        <div class="cardTaskTitle">{cardProps.title}</div>
      </div>
      <div class="cardFooter">
        <div class="cardFooterIcon">
          <img src={Icon} />
        </div>
        <div className="cardTag">{cardProps.tag}</div>
      </div>
    </div>
  );
}
