import React, { Component } from 'react';
import Input from './input';
import './loginform.css';

 class LoginForm extends Component {

    state={
        account: {username: 'hg-official@iiitranchi',password:''},
        errors: {}
    }

    validate = () => {
        const errors={};
        const {account} = this.state;
        if(account.username.trim()==='')
            errors.username='Username is Required';
        if(account.password.trim()==='')
            errors.password='Password is Required';
        return Object.keys(errors).length===0?null:errors;
    };

    validateProperty = input =>{
        if(input.name === 'username'){
            if(input.value.trim() === '') return "Username can't be empty.";
        }
        if(input.name === 'password'){
            if(input.value.trim() === '') return "Password can't be empty.";
        }

    }

    handleChange = ({currentTarget:input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input); 
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account,errors});
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if(errors) return;

        //axios post request
         
        console.log("Submitted");
    };

    render() { 
         return ( 
             <div className="text-white pt-5 admin-login">
                 <h1 className="text-center">Admin Login</h1>
                 <br></br>
                 <div className="container adm-form pt-4 pd-4">
                 <form onSubmit={this.handleSubmit}>
                        <Input errors={this.state.errors.username} name="username" label="Username" value={this.state.account.username} onChange={this.handleChange} type="text" readOnly={true}/>
                        <Input errors={this.state.errors.password} name="password" label="Password" value={this.state.account.password} onChange={this.handleChange} type="password"readOnly={false}/> 
                        <button disabled={this.validate()} className="btn btn-success submit-button"><b>Login</b></button>
                 </form>
                 </div>
             </div>
          );
    }
 }
  
 export default LoginForm;