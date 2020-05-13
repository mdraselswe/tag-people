import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  tagGroupBoxRoot: ({ isListLength }) => ({
    padding: isListLength ? 8 : 15,
    border: "1px solid #CCDADF",
    borderRadius: 8,
    margin: "0 12px",
    maxHeight: 103,
    overflow: 'auto'
  }),
}));

const TagGroupBox = (props) => {
  const classes = useStyles(props);
  const { children } = props;

  return <div className={classes.tagGroupBoxRoot}>{children}</div>;
};

export default TagGroupBox;
