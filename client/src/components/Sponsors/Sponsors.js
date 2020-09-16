import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sponsors.css';
import SponserCard from './SponsorsCard';

function Sponsors() {
  return (
    <div>
      <div className="my-5">
        <br /><br /> <br /> <br /> <br />
        <h1 className="text-center">Our Partners</h1>
      </div>
      <div className="row justify-content-center mx-auto ">
        <SponserCard title="Partner" />
        <SponserCard title="Partner" />
        <SponserCard title="Partner" />
        <SponserCard title="Partner" />
      </div>
    </div>
  );
}

export default Sponsors;
