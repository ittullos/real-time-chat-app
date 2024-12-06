import React from "react";
import LoginForm from "../components/LoginForm";
import logo from "../assets/logo.png";

const LoginPage = () => {
  return (
    <div className="auth-page">
      <img src={logo} alt="Logo" className="auth-logo" />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
