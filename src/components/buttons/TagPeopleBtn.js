import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { ReactComponent as TagIcon } from "../../assets/tag.svg";

const useStyle = makeStyles((theme) => ({
  root: (props) => ({
    padding: ".32rem 2rem",
    transition: ".3s ease-in-out",
    borderRadius: "24px",
    fontWeight: "normal",
    textTransform: "capitalize",
    fontSize: 12,
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)",

    backgroundColor: props.bgcolor ? props.bgcolor : "#263251",
    color: props.txtcolor ? props.txtcolor : "#fff",

    "&:hover": {
      backgroundColor: props.hoverbg ? props.hoverbg : "rgba(38, 50, 81, 0.78)",
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
  tagIcon: {
    marginRight: 5,
  },
}));

const TagPeopleBtn = (props) => {
  const { title, className, ...others } = props;

  const classes = useStyle(props);

  return (
    <Button
      className={className}
      classes={{
        root: classes.root,
      }}
      // startIcon={<TagIcon />}
      {...others}
    >
      <TagIcon className={classes.tagIcon} />
      Tag people
    </Button>
  );
};

export default TagPeopleBtn;
