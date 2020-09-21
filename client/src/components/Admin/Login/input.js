import React from 'react';

const Input = ({name,label,value,onChange,errors,type,readOnly}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name} className="input-label"><b>{label}</b></label>
            <input 
                name={name} 
                onChange={onChange} 
                value={value} 
                id={name} 
                type={type} 
                className="form-control input-space" 
                readOnly={readOnly}
            />
            {errors && <div className="text-danger error-message"><b>{errors}</b></div>}
        </div>
     );
}
 
export default Input;