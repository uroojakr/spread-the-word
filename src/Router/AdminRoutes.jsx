import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminDashBoard from "../Pages/AdminDashoard";
import AdminAppBar from "../Layout/AdminAppbar";
import RFL from "../Admin/RFL";
import UserStatus from "../Admin/UserStatus";
import Rewards from "../Admin/Rewards";
import Settings from "../Admin/Settings";

function AdminRoutes() {
  return (
    <>
      <AdminAppBar />
      <Routes>
        <Route path="/" element={<AdminDashBoard />} />
        <Route path="/userstatus" element={<UserStatus />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/rfl" element={<RFL />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default AdminRoutes;
