import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomButton from "../Components/Buttons";
import CustomTextField from "../Components/Textfield";
import Loginside from "../Images/Loginside.jpg";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
    padding: "40px",
  },
  illustration: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    maxWidth: "300px",
  },
  textField: {
    marginBottom: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "32px",
  },
}));

function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleAdminLogin = async () => {
  //   try {
  //     // Send POST request to backend
  //     const response = await axios.post("/api/login", {
  //       username,
  //       password,
  //       role: "admin", // Optional: You can pass the role here if needed
  //     });

  //     // Handle successful login
  //     console.log(response.data.message);
  //   } catch (error) {
  //     // Handle error
  //     console.error("Error logging in", error);
  //   }
  // };

  // const handleUserLogin = async () => {
  //   try {
  //     // Send POST request to backend
  //     const response = await axios.post("/api/login", {
  //       username,
  //       password,
  //       role: "user", // Optional: You can pass the role here if needed
  //     });

  //     // Handle successful login
  //     console.log(response.data.message);
  //   } catch (error) {
  //     // Handle error
  //     console.error("Error logging in", error);
  //   }
  // };

  const handleAdminLogin = () => {
    // Perform the necessary logic for admin login

    // Navigate to the new match page
    navigate("/Pages/AdminDashoard");
  };

  const handleUserLogin = () => {
    // Perform the necessary logic for user login

    // Navigate to the new match page
    navigate("/Pages/UserDashboard");
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={classes.illustration}>
          <img
            src={Loginside}
            alt="Illustration"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </Grid>

        <Grid item xs={12} md={6} className={classes.formContainer}>
          <div className={classes.form}>
            <Typography variant="h5" align="left" gutterBottom>
              Sign In
            </Typography>
            <CustomTextField
              label="Username"
              className={classes.textField}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <CustomTextField
              label="Password"
              type="password"
              className={classes.textField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={classes.buttonContainer}>
              <CustomButton
                label="Admin Login"
                variant="contained"
                color="primary"
                onClick={handleAdminLogin}
              />
              <CustomButton
                label="User Login"
                variant="contained"
                color="primary"
                onClick={handleUserLogin}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
