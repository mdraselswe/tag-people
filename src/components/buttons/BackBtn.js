import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { ReactComponent as BackIcon } from "../../assets/back.svg";

const useStyle = makeStyles((theme) => ({
  root: (props) => ({
    padding: ".25rem .4rem",
    transition: ".3s ease-in-out",
    borderRadius: "24px",
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: 12,
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)",

    backgroundColor: props.bgcolor ? props.bgcolor : "#DDE2EF",
    color: props.txtcolor ? props.txtcolor : "#525B74",

    "&:hover": {
      backgroundColor: props.hoverbg ? props.hoverbg : "rgb(206, 206, 206)",
      color: props.hovertxt ? props.hovertxt : "#525B74",
    },

    "&:focus": {
      outline: "none",
    },

    "&:disabled": {
      backgroundColor: "#e7e7e7",
      color: "#979797",
    },
  }),
}));

const BackBtn = (props) => {
  const { title, className, ...others } = props;

  const classes = useStyle(props);

  return (
    <Button
      className={className}
      classes={{
        root: classes.root,
      }}
      startIcon={<BackIcon />}
      {...others}
    >
      Back
    </Button>
  );
};

export default BackBtn;
