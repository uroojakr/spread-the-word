// UserRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import UserAppBar from "../Layout/ClientAppBar";
import RFLStatus from "../User/RFLStatus";
import UserDashBoard from "../Pages/UserDashboard";
import Profile from "../User/Profile";
import UserSettings from "../User/Settings";
import RFLUser from "../User/RFLuser";

function UserRoutes() {
  return (
    <>
      <UserAppBar />
      <Routes>
        <Route path="/" element={<UserDashBoard />} />
        <Route path="/rflstatus" element={<RFLStatus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/rfluser" element={<RFLUser />} />
      </Routes>
    </>
  );
}

export default UserRoutes;
