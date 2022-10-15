import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactUs.css";

const Contact = () => {
  const [messageDetails, updateDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [sentStatus, updateStatus] = useState({message: '', status: '', color: ''});
  const handleSubmit = () => {
    const payload = {
      ...messageDetails
    }
    updateStatus({message: 'Hold up tight, sending the message 🚀', status: 'sending', color: '#e4d00a'});
    
    axios.post('/api/contact', payload)
      .then(res => {
        updateStatus({message: 'Message sent! 🛰️ 🎉', status: 'sent', color: '#39ff14'});
      })
      .catch(err => {
        updateStatus({message: 'Message sending failed! 🚀💥', status: 'failed', color: '#ff3800'});
      })
  };
  return (
    <div className="contactUs-section container">
      <div className="contactUs-heading">Contact Us</div>
     <form
          id="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
      <div className="row text-white formDisplay">
       
          <div className="form-group wid">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={messageDetails.name}
              onChange={(e) => {
                updateDetails({ ...messageDetails, name: e.target.value });
              }}
              className="form-control input-box"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group wid">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={messageDetails.email}
              onChange={(e) => {
                updateDetails({ ...messageDetails, email: e.target.value });
              }}
              className="form-control input-box"
              aria-describedby="emailHelp"
              placeholder="Your Email"
              required
              autoComplete="true"
            />
          </div>
          <div className="form-group wid">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control input-box"
              value={messageDetails.message}
              onChange={(e) => {
                updateDetails({ ...messageDetails, message: e.target.value });
              }}
              rows="5"
              placeholder="Type your message"
              required
            ></textarea>
          </div>
          <button className="submit btn wid" disabled={sentStatus.status !== 'sending' ? false: true} tybuttone="submit">
            {sentStatus.status === 'sending' ? 'Sending...' : 'Submit'}
          </button>
          {sentStatus.status !== '' && <div className="err-msg" style={{color: sentStatus.color}}>{sentStatus.message}</div>}
      </div>
        </form>
    </div>
  );
};

export default Contact;
