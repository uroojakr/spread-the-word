import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomButton from "../Components/Buttons";
import CustomTextField from "../Components/Textfield";
import Loginside from "../Images/Loginside.jpg";

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

  const handleAdminLogin = () => {
    // Handle admin login
  };

  const handleUserLogin = () => {
    // Handle user login
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={classes.illustration}>
          <img
            src={Loginside}
            alt="Illustration"
            style={{ height: "130%", objectFit: "cover" }}
          />
        </Grid>

        <Grid item xs={12} md={6} className={classes.formContainer}>
          <div className={classes.form}>
            <Typography variant="h5" align="left" gutterBottom>
              Sign In
            </Typography>
            <CustomTextField label="Username" className={classes.textField} />
            <CustomTextField
              label="Password"
              type="password"
              className={classes.textField}
            />
            <div className={classes.buttonContainer}>
              <CustomButton label="Login as Admin" to="/AdminAppbar" />
              <CustomButton label="Login as User" to="/UserAppbar" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
