import React from "react";

export function Input(task) {
    return (
      <div className="form-group">
        <input className="form-control" {...task.title} />
      </div>
    );
  }

export function TextArea(task) {
    return (
      <div className="form-group">
        <textarea className="form-control" rows="10" {...task.textBody} />
      </div>
    );
  }