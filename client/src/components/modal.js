import React, { useEffect } from 'react';
import './modal.css';
import $ from 'jquery';
const Modal=() =>{

    useEffect(() => {
        function readyFn(){
            document.body.classList.add("modal-is-open");
        }
        $( window ).on("load", readyFn );

const modalBtn = document.querySelector(".js-btn");
const modalClose = document.querySelectorAll(".jsModalClose");
const modal = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", () => {
  document.body.classList.add("modal-is-open");
});

modalClose.forEach(item => {
  item.addEventListener("click", () => {
    document.body.classList.remove("modal-is-open");
  });
});
// close modal when click outside
modal.addEventListener("click", e => {
  if (!e.target.closest(".modal")) {
    document.body.classList.remove("modal-is-open");
  }
});
      });
    
    return(
        <>
            <main className="main">
   <div className="container">
      <button className="btn js-btn">Click to Share</button>
   </div>
</main>
<div className="modal-overlay js-modal">
   <div className="modal">
      <div className="modal__content">
         <h1 className="modal__title">Notice Board</h1>
         <p className="modal__text">Pay your attention here!</p>
         <div className="modal__btns">
            
         </div>
      </div>
   
      <button className="modal__close jsModalClose">Close this window</button>
      <button className="modal__close-btn jsModalClose">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <g fill="none" fillRule="evenodd" opacity=".5">
               <path d="M-7-7h34v34H-7z" />
               <path stroke="#202842" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.125" d="M18.5 1.5l-17 17m0-17l17 17" />
            </g>
         </svg>
      </button>
   </div>
</div>
        </>
    );
}
export default Modal;