import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import LoginCriar from "./LoginCriar";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" end element={<LoginForm />} />
        <Route path="criar" element={<LoginCriar />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
