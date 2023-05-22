import React from "react";
import { Routes, Route } from "react-router-dom";


import RFL from "../Admin/RFL";
import UserStatus from "../Admin/UserStatus";
import Rewards from "../Admin/Rewards";
import Settings from "../Admin/Settings";

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserStatus />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/rfl" element={<RFL />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default AdminRoutes;
