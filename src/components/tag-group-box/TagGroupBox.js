import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  tagGroupBoxRoot: ({ hideBorder }) => ({
    padding: 8,
    border: !hideBorder ? "1px solid #CCDADF" : "none",
    borderRadius: 8,
    margin: 12
  }),
}));

const TagGroupBox = (props) => {
  const classes = useStyles(props);
  const { children } = props;

  return <div className={classes.tagGroupBoxRoot}>{children}</div>;
};

export default TagGroupBox;
