import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notice from './Notice/Notice';
import './AboutUs.css';

function AboutUs() {
  return (
    // <div className="about-us-section">
    //   <hr width="90%"></hr>
    //   <div className="container-fluid text-white">
    //     <div className="row mb-5">
    //       <div className="col-lg-6">
    //         <h1 className="heading">ABOUT US</h1>
    //           <p className="paragraph">
    //             House Of Geeks is the technical society of Indian Institue of Information Technology, Ranchi.
    //             For the all round development of the students, the institute provides a host of various students activities. 
    //             These activities range from sports, personal-hobbies to technical interests. The students are encouraged to become the 
    //             member of these bodies to help broaden their skills and horizons. These student bodies not only help the students explore 
    //             their hidden talent but also help in areas such as personality development and inculcating in the students.
    //           </p>
    //       </div>
    //       <div className="col-lg-6 image-row">
    //           <img className="image1" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="1" data-toggle="modal" data-target="#image1modal" />
    //           <div className="modal fade" id="image1modal" tabIndex="-1" aria-labelledby="image1modalLabel" aria-hidden="true">
    //             <div className="modal-dialog modal-dialog-centered modal-lg">
    //               <div className="modal-content">
    //                 <div className="modal-body">
    //                   <img className="modalimage1" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="1" />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <img className="image2" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="2" data-toggle="modal" data-target="#image2modal" />
    //           <div className="modal fade" id="image2modal" tabIndex="-1" aria-labelledby="image2modalLabel" aria-hidden="true">
    //             <div className="modal-dialog modal-dialog-centered modal-lg">
    //               <div className="modal-content">
    //                 <div className="modal-body">
    //                   <img className="modalimage1" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="2" />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <img className="image3" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="3" data-toggle="modal" data-target="#image3modal" />
    //           <div className="modal fade" id="image3modal" tabIndex="-1" aria-labelledby="image3modalLabel" aria-hidden="true">
    //             <div className="modal-dialog modal-dialog-centered modal-lg">
    //               <div className="modal-content">
    //                 <div className="modal-body">
    //                   <img className="modalimage1" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="3" />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <img className="image4" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="4" data-toggle="modal" data-target="#image4modal" />
    //           <div className="modal fade" id="image4modal" tabIndex="-1" aria-labelledby="image4modalLabel" aria-hidden="true">
    //             <div className="modal-dialog modal-dialog-centered modal-lg">
    //               <div className="modal-content">
    //                 <div className="modal-body">
    //                   <img className="modalimage1" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="4" />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //       </div>
    //     </div>
    //   </div>
    //   <hr width="90%"></hr>
    // </div>
    <div className="about-us-section container">
      <div className="box">
        <div className="title">
          About Us
        </div>
        <div className="content">
          House of Geeks is the Technical Society of Indian Institute of Information Technology,
          Ranchi. Gravity is not just a force, it is the tendency of matter to move towards 
          where the time flows slower. Following the same principle, we believe that collaborating,
          mending together minds to make something phenomenal is time travel in itself! 
          So, buckle up as Captain Geek takes you through our communities and societies!
        </div>
        <Notice />
      </div>
    </div>
  );
}

export default AboutUs;
