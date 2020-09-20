import React, { useState } from 'react';
import Input from './input';
import './loginform.css';

 function LoginForm() {
  
    const [account, setAccount] = useState({
        username:'hg-official@iiitranchi',
        password: ''
    });
    const [errors,setErrors] = useState({});
    

    const validate = () => {
        const errors={};
        if(account.username.trim()==='')
            errors.username='Username is Required';
        if(account.password.trim()==='')
            errors.password='Password is Required';
        return Object.keys(errors).length===0?null:errors;
    };

    const validateProperty = input =>{
        if(input.name === 'username'){
            if(input.value.trim() === '') return "Username can't be empty.";
        }
        if(input.name === 'password'){
            if(input.value.trim() === '') return "Password can't be empty.";
        }

    }

    const handleChange = ({currentTarget:input}) => {
        const errors = {...errors};
        const errorMessage = validateProperty(input); 
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const account = {...account};
        account[input.name] = input.value;
        setAccount({account});
        setErrors({errors});
    };

    const handleSubmit = e => {
        e.preventDefault();
        const errors = validate();
        setErrors({errors: errors || {}});
        if(errors) return;

        //axios post request
        console.log("Submitted");
    };

    
         return ( 
             <div className="text-white pt-5 admin-login">
                 <h1 className="text-center">Admin Login</h1>
                 <br></br>
                 <div className="container adm-form pt-4 pd-4">
                 <form onSubmit={handleSubmit}>
                        <Input errors={errors.username} name="username" label="Username" value={account.username} onChange={handleChange} type="text" readOnly={true}/>
                        <Input errors={errors.password} name="password" label="Password" value={account.password} onChange={handleChange} type="password"readOnly={false}/> 
                        <button disabled={validate()} className="btn btn-success submit-button"><b>Login</b></button>
                 </form>
                 </div>
             </div>
          );
    
 }
  
 export default LoginForm;