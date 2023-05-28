import React from "react";
import { makeStyles } from "@mui/styles";
import CustomTextField from "../Components/Textfield";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  searchInput: {
    width: 300, // Adjust the width as needed
  },
}));

function Search({ onChange, ...rest }) {
  const classes = useStyles();

  const handleInputChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={classes.root}>
      <CustomTextField
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
        className={classes.searchInput}
        {...rest}
      />
    </div>
  );
}

export default Search;
