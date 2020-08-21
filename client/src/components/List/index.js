import React from "react";
import "./style.css";

// Used to create task list

export function List({ children }) {
  return (
    <div className="card container-sm clear-card">
      <div className="card-body">
        <div className="list-overflow-container">
          <ul className="list-group">{children}</ul>
        </div>
      </div>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
