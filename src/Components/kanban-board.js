import React, { useState, useEffect } from "react";
import "../styles.css";
import { Card } from "./Card";
import KanbanBoardByUser from "./kb-by-user";
import Icon from "./profile-icon.svg";

export default function KanbanBoard(props) {
  const [group, setGroup] = useState("user");
  const [sort, setSort] = useState("title");
  const [groupByUser, setGroupByUser] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDropdownGroupChange = (event) => {
    setGroup(event.target.value);
  };

  const handleDropdownSortChange = (event) => {
    setSort(event.target.value);
  };

  const getData = (data) => {
    const userMap = new Map();
    data.users.forEach((user) => {
      userMap.set(user.id, []);
    });
    data.tickets.forEach((ticket) => {
      userMap.get(ticket.userId).push(ticket);
    });
    setGroupByUser(userMap);
  };
  useEffect(() => {
    if (group === "user") {
      getData(props.data);
    }
  }, []);
  useEffect(() => {
    if (group === "user") {
      getData(props.data);
    }
  }, [group, sort]);

  return (
    <div class="kanban-container">
      <div class="boardController">
        <div class="profileIcon">
          <img src={Icon} />
        </div>
        <div onClick={() => setIsModalOpen(true)}>Display</div>
        {isModalOpen && (
          <div id="myModal" class="modal">
            <div class="modal-content">
              <div class="modal-header">
                <div> </div>
                <button
                  class="modal-button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close Modal
                </button>
              </div>
              <div class="modal-body">
                <div class="flex-container">
                  <div>Grouping</div>
                  <select value={group} onChange={handleDropdownGroupChange}>
                    <option value="user">User</option>
                    <option value="status">Status</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
                <div class="flex-container">
                  <div>Ordering</div>
                  <select value={sort} onChange={handleDropdownSortChange}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
                </div>
              </div>
              {/* <div class="modal-footer">
                <h3>Modal Footer</h3>
              </div> */}
            </div>
          </div>
        )}
      </div>
      <div class="kanban">
        {group === "user" &&
          (groupByUser ? (
            <KanbanBoardByUser data={groupByUser} users={props.data.users} />
          ) : (
            <div>Loading</div>
          ))}
      </div>
    </div>
  );
}
