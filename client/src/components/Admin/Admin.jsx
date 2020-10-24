import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./admin.css";
import "react-toastify/dist/ReactToastify.css";
import EventManage from "./event/EventManage";
import CreateEvent from "./event/CreateEvent";

const Admin = (props) => {
  const token = jwt_decode(window.localStorage.getItem("token"));
  const [mode, updateMode] = useState("edit");
  const history = useHistory();

  return (
    <div className="admin">
      <h1 style={{ paddingLeft: "1em" }}>Admin Dashboard</h1>
      <>
        <div style={{ margin: ".5em auto" }} className="admin-details">
          <div>
            <div style={{ marginBottom: "10px" }}>
              <label>username: </label>
              <b> {token.username}</b>
              <div
                className="logout-button"
                onClick={() => {
                  window.localStorage.clear();
                  history.push("/admin");
                }}
              >
                Logout
              </div>
            </div>
            <div>
              <label>email: </label>
              {/* to be updated when JWT will be updated on backend */}
              <b> {token.email || "dummy@iiitranchi.ac.in"}</b>
            </div>
          </div>
        </div>
      </>
      <div>
        <button
          onClick={() => {
            updateMode("create");
          }}
          disabled={mode === "create" ? true : false}
          className="admin-create-button"
        >
          Create new Event
        </button>
      </div>
      {mode === "create" ? (
        <div className="admin-create">
          <CreateEvent updateMode={updateMode} />
        </div>
      ) : (
        <div className="admin admin-tables">
          <EventManage />
        </div>
      )}
    </div>
  );
};

export default Admin;
