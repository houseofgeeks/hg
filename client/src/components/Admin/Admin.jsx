import React from "react";
import jwt_decode from "jwt-decode";
import "./admin.css";

const Admin = (props) => {
  const token = jwt_decode(window.localStorage.getItem("token"));
  return (
    <div className="admin">
      <h1>Admin Dashboard</h1>
      <>
        <div className="admin admin-details">
          <div>
            <div style={{marginBottom: "10px"}}>
              <label>username: </label>
              <b> {token.admin}</b>
              <div className="logout-button" onClick={() => {
								window.localStorage.clear();
								props.history.push('/admin')
							}}>Logout</div>
            </div>
            <div>
              <label>email: </label>
							{/* to be updated when JWT will be updated on backend */}
              <b> {token.email || "dummy@iiitranchi.ac.in"}</b>
            </div>
          </div>
        </div>
      </>
      <div className="admin admin-tables">
        <h1>componetnt to manipulate events and galary</h1>
      </div>
    </div>
  );
};

export default Admin;
