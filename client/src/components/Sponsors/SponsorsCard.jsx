import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const SponserCard = (props) => {
  return (
    <div>
      <div className="col-sm-3 justify-content-center">
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title text-center">{props.title}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SponserCard;