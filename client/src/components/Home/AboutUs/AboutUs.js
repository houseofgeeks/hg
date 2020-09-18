import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-section">
      <hr width="90%"></hr>
      <div className="container-fluid text-white">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="heading">ABOUT US</h1>
              <p className="paragraph">
                House Of Geeks is the technical society of Indian Institue of Information Technology, Ranchi.
                For the all round development of the students, the institute provides a host of various students activities. 
                These activities range from sports, personal-hobbies to technical interests. The students are encouraged to become the 
                member of these bodies to help broaden their skills and horizons. These student bodies not only help the students explore 
                their hidden talent but also help in areas such as personality development and inculcating in the students.
              </p>
          </div>
          <div className="col-sm-6">
              <img className="image1" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="1"/>
              <img className="image2" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="2"/>
              <img className="image3" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="3"/>
              <img className="image4" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="4"/>
          </div>
        </div>
      </div>
      <hr width="90%"></hr>
    </div>
  );
}

export default AboutUs;
