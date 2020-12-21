import React, { useState } from "react";
import axios from "axios";
import Input from "./input";
import "./loginform.css";
import Notify from '../../Notify';
import { ToastContainer } from "react-toastify";

function LoginForm(props) {
  //object
  const [account, setAccount] = useState({
    username: "admin",
    password: "",
  });
  const [errors, setErrors] = useState({});
	const [disabled, setStatus] = useState(false);
  const validate = () => {
    const err = {};
    if (account.username.trim() === "") err.username = "Username is Required";
    if (account.password.trim() === "") err.password = "Password is Required";
    return Object.keys(err).length === 0 ? null : err;
  };

  const validateProperty = (input) => {
    if (input.name === "username") {
      if (input.value.trim() === "") return "Username can't be empty.";
    }
    if (input.name === "password") {
      if (input.value.trim() === "") return "Password can't be empty.";
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    const err = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) err[input.name] = errorMessage;
    else err[input.name] = "";

    const acc = { ...account };
    acc[input.name] = input.value;
    setAccount({ ...account, ...acc });
    setErrors({ ...errors, ...err });
  };

  const handleSubmit = (e) => {
		setStatus(true);
    e.preventDefault();
    const err = validate();
    setErrors({ ...errors, ...err });
    if (errors.password !== "") return;
    const payload = {
      pass: `${account.password}`,
    };
    axios
      .post(`${process.env.REACT_APP_API || ''}/admin/login`, payload)
      .then((result) => {
				window.localStorage.setItem("token", result.data.accessToken);
				Notify("Login successful, Redirecting . . .", "success");
				setTimeout(() => {
					props.history.push("/admin");
				}, 3000);
      })
      .catch((err) => {
				setStatus(false);
        Notify(err.response.data.message, "err");
      });
  };

  return (
    <div className="text-white pt-5 admin-login">
      <h1 className="text-center">Admin Login</h1>
      <br></br>
      <div className="container adm-form pt-4 pd-4">
        <form onSubmit={handleSubmit}>
          <Input
            errors={errors.username}
            name="username"
            label="Username"
            value={account.username}
            onChange={handleChange}
            type="text"
            readOnly={true}
          />
          <Input
            errors={errors.password}
            name="password"
            label="Password"
            value={account.password}
            onChange={handleChange}
            type="password"
            readOnly={false}
          />
          <button
            disabled={disabled}
            className="btn btn-success submit-button"
          >
            <b>Login</b>
          </button>
        </form>
      </div>
      <ToastContainer autoClose={5000} />
    </div>
  );
}

export default LoginForm;
