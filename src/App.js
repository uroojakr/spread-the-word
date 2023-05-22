import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./Router/AdminRoutes";
import UserRoutes from "./Router/UserRoutes";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/admin/*" element={<AdminRoutes />} />{" "}
        <Route path="/user/*" element={<UserRoutes />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
