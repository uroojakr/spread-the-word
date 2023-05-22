import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import bgImage from "../Images/bg.gif";
import CustomButton from "../Components/Buttons";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bgImage}) `,
        backgroundSize: "cover ",
        backgroundPosition: "center !important",
        backgroundRepeat: "no-repeat !important",
        backgroundAttachment: "fixed",
         backgroundBlendMode: "multiply",
        background: "linear-gradient(to bottom, #6A00FF, #000000) ",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        align="center"
        sx={{ color: "#FFFFFF" }}
      >
        Spread the Word
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{ color: "#FFFFFF", mt: 4 }}
      >
        We provide you with authentic referral links and an easy way to track
        them.
      </Typography>

      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        {/* Replace the default Button components with the CustomButton component */}
        <CustomButton
          label="Login"
          to="/Login"
          variant="contained"
          color="secondary"
        />
        <CustomButton
          label="Signup"
          to="/Signup"
          variant="contained"
          color="secondary"
        />
      </Box>
    </Box>
  );
};

export default Home;
