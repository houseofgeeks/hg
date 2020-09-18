import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Error.css'

const Error = () => {
    return (
        <div className="error-component container">
            <hr />
            <div className="text-center text-danger firstdiv">
                <h1 className="font-weight-bolder" style={{ opacity: 1 }}>404 Error </h1>
                <h4 className="font-weight-bolder">Page Not Found</h4>
            </div>
            <hr />
            <div className="text-center seconddiv">
                <div className="pad-topbot">
                    <p className="whitecolor display-5">We're sorry , the page you requested could not be found</p>
                    <p className="whitecolor">Please go back to the home page</p>
                    <div className="text-center">
                        <button type="button" className="btn btn-danger"><NavLink to="/" className=".text-muted">Back to home</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Error;