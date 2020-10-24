import React, { useState } from "react";
import "./editEvent.css";
import { ToastContainer } from "react-toastify";
import DateTimePicker from "react-datetime-picker";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import Notify from "../../Notify";

const CreateEvent = (props) => {
  const { updateMode } = props;

  const [elem, handleUpdate] = useState({
    community: "",
    title: "",
    description: "",
    eventDate: `${new Date()}`,
    eventLink: "",
  });
  const [message, updateMessage] = useState("");

  const handleCreate = () => {
    updateMessage("Saving . . .");
    const payload = {
      ...elem
    }
    axios.post("/event", payload, {
      headers: {
        authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
    .then(res => {
        updateMessage("Saved!");
        Notify("Event saved!", "success");
        setTimeout(()=>{
          updateMode("edit");
        }, 1500);
      })
      .catch(err => {
        updateMessage("Not saved, Try again!");
        Notify("Event not saved! Try again after some time", "err");
      })
  }

  return (
    <div style={{ margin: "10px auto" }} className="event-modal">
      <div className="event-modal-header">
        <span>Event</span>
        <span
          onClick={() => {
            updateMode("edit");
          }}
          style={{ float: "right", cursor: "pointer" }}
        >
          <AiFillCloseCircle size={32} />
        </span>
      </div>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
      >
        <div className="event-modal-body">
          <div>
            <span>All fields are required</span>
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
                value={new Date(elem.eventDate)}
              />
              <br />
              <span style={{ display: "block", width: "280px" }}>
                For changing time first use backspace they enter number or use
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
                value={elem.description}
                required
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="event-modal-footer">
          <button
            style={{ marginRight: "3px" }}
            onClick={() => {
              updateMode("edit");
            }}
          >
            Cancel
          </button>
          <button
            tybuttone="submit"
            style={{ background: (message === "Saving . . ." ? "#9b9797" : "#20bf6b") }}
            disabled={(message === "Saving . . ." ? true : false)}
          >
            {(message === "Saving . . ." ? message : "Save")}
          </button>
        </div>
          <center><span style={{color: (message.substr(0, 3) === "Not" ? "#ee2a7b":"")}} >{message}</span></center>
      </form>
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default CreateEvent;
