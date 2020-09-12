import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const SponserCard = (props)=>{
    return(
        <>  

  <div className="col-sm-3 mx-auto">
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
    </div>
  </div>
 
 
        </>
    )
}
export default SponserCard;