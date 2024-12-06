import React from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm />
        <RegisterForm />
      </header>
    </div>
  );
}

export default App;
