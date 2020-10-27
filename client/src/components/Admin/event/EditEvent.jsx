import React, { useState } from "react";
import moment from "moment";
import "./editEvent.css";
import DateTimePicker from "react-datetime-picker";
import { AiFillCloseCircle } from "react-icons/ai";

const EventModal = (props) => {
  const { showModal, updateEvent } = props;
  const [readOnly, makeEditable] = useState(true);
  const [elem, handleUpdate] = useState(props.elem);

  return (
    <div className="event-modal">
      <div className="event-modal-header">
        <span>Event</span>
        <span
          onClick={() => {
            showModal(-1);
          }}
          style={{ float: "right", cursor: "pointer" }}
        >
          <AiFillCloseCircle size={32} />
        </span>
      </div>
      <hr />
      <div className="event-modal-body">
        <div>
          <span>All fields are required</span>
          <div className="event-modal-input">
            Created at: {moment(elem.createdAt).format("MM-DD-YYYY hh:mm a")}
          </div>
          <div className="event-modal-input">
            <label>Community: </label>
            <br />
            <input
              onChange={(e) => {
                handleUpdate({
                  ...elem,
                  community: e.target.value,
                });
              }}
              required
              readOnly={readOnly}
              value={elem.community}
            />
          </div>
          <div className="event-modal-input">
            <label>Title: </label>
            <br />
            <input
              onChange={(e) => {
                handleUpdate({
                  ...elem,
                  title: e.currentTarget.value,
                });
              }}
              required
              readOnly={readOnly}
              value={elem.title}
            />
          </div>
          <div className="event-modal-input">
            <label>Event Date and Time: </label>
            <br />
            <DateTimePicker
              onChange={(e) => {
                handleUpdate({
                  ...elem,
                  eventDate: e,
                });
              }}
              disabled={readOnly}
              value={new Date(elem.eventDate || `${new Date()}`)}
            />
            <br />
            <span style={{ display: "block", width: "280px" }}>
              For changing time first use backspace then enter number or use
              arrow keys
            </span>
          </div>
          <div className="event-modal-input">
            <label>Event link: </label>
            <br />
            <input
              onChange={(e) => {
                handleUpdate({
                  ...elem,
                  eventLink: e.currentTarget.value,
                });
              }}
              required
              readOnly={readOnly}
              value={elem.eventLink}
            />
          </div>
        </div>
        <div>
          <div className="event-modal-input" style={{ height: "100%" }}>
            <label>Description: </label>
            <br />
            <textarea
              onChange={(e) => {
                handleUpdate({
                  ...elem,
                  description: e.currentTarget.value,
                });
              }}
              readOnly={readOnly}
              value={elem.description}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="event-modal-footer">
        <button
          disabled={!readOnly}
          onClick={() => {
            makeEditable(false);
          }}
        >
          Edit
        </button>
        <div>
          <button
            style={{ marginRight: "3px" }}
            onClick={() => {
              showModal(-1);
            }}
          >
            Cancel
          </button>
          <button
            style={{ background: readOnly === 0 ? "#20bf6b" : "" }}
            disabled={readOnly}
            onClick={() => {
              updateEvent(elem);
              makeEditable(true);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
