import React, { useState } from "react";
import CustomTextField from "../Components/Textfield";
import CustomButton from "../Components/Buttons";

function Settings() {
  const [adminInfo, setAdminInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdminInfo({
      ...adminInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform update logic with adminInfo
    console.log("Admin Info:", adminInfo);
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <CustomTextField
          label="Name"
          name="name"
          value={adminInfo.name}
          onChange={handleChange}
        />

        <CustomTextField
          label="Email"
          name="email"
          value={adminInfo.email}
          onChange={handleChange}
        />

        <CustomTextField
          label="Password"
          name="password"
          type="password"
          value={adminInfo.password}
          onChange={handleChange}
        />

        <CustomButton label="Update" type="submit" />
      </form>
    </div>
  );
}

export default Settings;
