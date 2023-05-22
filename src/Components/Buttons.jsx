import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  customButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginRight: "8px", // Add margin-right for spacing
  },
}));

function CustomButton({ label, to, variant, color }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button
      className={classes.customButton}
      variant={variant}
      color={color}
      onClick={handleClick}
      component={Link}
      to={to}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
