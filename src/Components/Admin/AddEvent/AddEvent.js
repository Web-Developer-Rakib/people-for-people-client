import React from "react";
import { Button } from "react-bootstrap";
import "./AddEvent.css";
const AddEvent = () => {
  return (
    <div>
      <div className="admin-header">
        <h3 className="admin-title">Add Event</h3>
      </div>
      <div className="admin-body">
        <form className="add-event-form">
          <div>
            <label>Event title</label>
            <br />
            <input
              className="input-field"
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div>
            <label>Event date</label>
            <br />
            <input className="input-field" type="date" />
          </div>
          <div>
            <label>Description</label>
            <br />
            <textarea type="text" placeholder="Enter title" />
          </div>
          <div>
            <label>Image</label>
            <br />
            <input type="file" />
            <div className="add-event-btn">
              <Button>Add Event</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
