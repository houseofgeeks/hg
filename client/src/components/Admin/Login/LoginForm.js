import React, { useState } from 'react';
import Input from './input';
import './loginform.css';

 function LoginForm() {

    //object     
    const [account, setAccount] = useState({
        username:'hg-official@iiitranchi',
        password:''
    });
    const [errors,setErrors] = useState({
        username:'',
        password:''
    });
    

    const validate = () => {
        const err={};
        if(account.username.trim()==='')
            err.username='Username is Required';
        if(account.password.trim()==='')
            err.password='Password is Required';
        return Object.keys(err).length===0?null:err;
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
        const err = {...errors};
        const errorMessage = validateProperty(input); 
        if(errorMessage) err[input.name] = errorMessage;
        else delete err[input.name];

        const acc = {...account};
        acc[input.name] = input.value;
        setAccount({...account,...acc});
        setErrors({...errors,...err});
    };

    const handleSubmit = e => {
        e.preventDefault();
        const err = validate();
        setErrors({...errors,...err||{}});
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