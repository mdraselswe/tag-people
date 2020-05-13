import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    borderRadius: "45px",
    border: "1px solid #CCDADF",
    padding: "0",
    overflow: "hidden",
    width: "100%",
  },
  inputRoot: {
    marginLeft: "2rem",
    flex: 1,
  },
  iconButton: {
    borderRadius: 0,
    padding: "0.25rem .5rem",
  },
  input: {
    "&::placeholder": {
      fontSize: 12,
      color: "rgba(0, 0, 0, .5)",
      textAlign: "center",
    },
  },
});

const SearchInput = (props) => {
  const { ...others } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputBase
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.input,
        }}
        {...others}
      />
    </div>
  );
};

export default SearchInput;
