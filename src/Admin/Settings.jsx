import React, { useState } from "react";
import CustomTextField from "../Components/Textfield";
import CustomButton from "../Components/Buttons";
import { Box, Container, Typography } from "@mui/material";

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
    <Container maxWidth="sm">
      {" "}
      {/* Center the content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh", // Adjust the height as per your requirement
        }}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: "32px" }}>
          Settings
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: "16px" }}>
            <CustomTextField
              label="Name"
              name="name"
              value={adminInfo.name}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ marginBottom: "16px" }}>
            <CustomTextField
              label="Email"
              name="email"
              value={adminInfo.email}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ marginBottom: "16px" }}>
            <CustomTextField
              label="Password"
              name="password"
              type="password"
              value={adminInfo.password}
              onChange={handleChange}
            />
          </Box>

          <CustomButton label="Update" type="submit" />
        </form>
      </Box>
    </Container>
  );
}

export default Settings;
