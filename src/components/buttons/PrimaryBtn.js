import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: (props) => ({
    padding: "0.2rem 1.5rem",
    transition: ".3s ease-in-out",
    borderRadius: "4px",
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: 12,
    fontFamily: "Roboto",

    backgroundColor: props.bgcolor ? props.bgcolor : "#17C591",
    color: props.txtcolor ? props.txtcolor : "#fff",

    "&:hover": {
      backgroundColor: props.hoverbg ? props.hoverbg : "#079d49d6",
      color: props.hovertxt ? props.hovertxt : "#fff",
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

const PrimaryBtn = (props) => {
  const { title, className, ...others } = props;

  const classes = useStyle(props);

  return (
    <Button
      className={className}
      classes={{
        root: classes.root,
      }}
      {...others}
    >
      {title}
    </Button>
  );
};

export default PrimaryBtn;
