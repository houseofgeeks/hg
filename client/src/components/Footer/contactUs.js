import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactUs.css";

function contactUs() {
  return (
    <div className="contactUs-section container">
      <h2>Contact Us</h2>
      <div className="row text-white">
        {/* <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        > */}
        <div className="form-group col-12 col-md-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control input-box"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control input-box"
            aria-describedby="emailHelp"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group col-12">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control input-box"
            rows="5"
            placeholder="Type your message"
          ></textarea>
        </div>
        <button tybuttone="submit" className="submit btn ">
          Submit
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default contactUs;
