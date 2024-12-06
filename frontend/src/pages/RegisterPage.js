import React from "react";
import RegisterForm from "../components/RegisterForm";
import logo from "../assets/logo.png";

const RegisterPage = () => {
  return (
    <div className="auth-page">
      <img src={logo} alt="Logo" className="auth-logo" />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
