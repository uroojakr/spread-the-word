import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  customTextField: {
    // custom styles here
    // Example: width: "100%",
  },
}));

function CustomTextField({ label, ...rest }) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.customTextField}
      label={label}
      variant="outlined"
      {...rest}
    />
  );
}

export default CustomTextField;
