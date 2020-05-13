import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    borderRadius: 4,
    backgroundColor: "#DDE2EF",
    color: "#263251",
    fontSize: 12,
    fontWeight: 500,
    fontFamily: "Roboto",
    padding: "0rem 0rem",
    height: 24,
    margin: 3,

    "& .MuiChip-avatar": {
      height: 20,
      width: 20,
      marginLeft: 2,
    },
  },
  deleteIcon: {
    width: 9,
    height: 9,
    margin: "0 8px 0 -6px",
  },
}));

const Tag = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Chip
      avatar={
        <Avatar
          variant="rounded"
          alt="Natacha"
          src="https://source.unsplash.com/random"
        />
      }
      label="Tomothy Henry"
      onClick={handleClick}
      onDelete={handleDelete}
      classes={{
        root: classes.chipRoot,
        deleteIcon: classes.deleteIcon,
      }}
      deleteIcon={<CloseIcon />}
    />
  );
};

export default Tag;
