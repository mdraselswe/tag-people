import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  tagGroupBoxRoot: ({ hideBorder }) => ({
    padding: 15,
    border: !hideBorder ? "1px solid #CCDADF" : "none",
    borderRadius: 8,
  }),
}));

const TagGroupBox = (props) => {
  const classes = useStyles(props);

  return <div className={classes.tagGroupBoxRoot}></div>;
};

export default TagGroupBox;
