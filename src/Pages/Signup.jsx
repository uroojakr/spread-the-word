import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomButton from "../Components/Buttons";
import CustomTextField from "../Components/Textfield";
import Signupside from "../Images/Signupside.png";

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

function Signup() {
  const classes = useStyles();

  const handleAdminSignup = () => {
    // Handle admin signup
  };

  const handleUserSignup = () => {
    // Handle user signup
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={classes.illustration}>
          <img
            src={Signupside}
            alt="Illustration"
            style={{ height: "120%", objectFit: "cover" }}
          />
        </Grid>

        <Grid item xs={12} md={6} className={classes.formContainer}>
          <div className={classes.form}>
            <Typography variant="h5" align="left" gutterBottom>
              Sign Up
            </Typography>
            <CustomTextField label="Full Name" className={classes.textField} />
            <Box mt={3}/>
            <CustomTextField label="Email" className={classes.textField} />
            <CustomTextField
              label="Confirmation Number"
              className={classes.textField}
            />
            <CustomTextField
              label="Password"
              type="password"
              className={classes.textField}
            />
            <div className={classes.buttonContainer}>
              <CustomButton
                label="Sign Up as Admin"
                onClick={handleAdminSignup}
              />
              <CustomButton
                label="Sign Up as User"
                onClick={handleUserSignup}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
