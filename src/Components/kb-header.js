import React, { useState, useEffect } from "react";
import "../styles.css";
import Icon from "./profile-icon.svg";

export default function KanbanBoardHeader(props) {
  return (
    <div class="kbheader-container">
      <div class="iconNamCount">
        <img src={Icon} class="profileIcon" />
        <div class="header-name">{props.name}</div>
        <div>2</div>
      </div>
      <div class="addThreedot">
        <div>+</div>
        <div>...</div>
      </div>
    </div>
  );
}
