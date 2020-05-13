import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import React from "react";
import { makeStyles } from "@material-ui/core";
// import {Clear} from '@material-ui/icons';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paperRoot: (props) => ({
    width: theme.typography.pxToRem(props.width),
    maxWidth: theme.typography.pxToRem(props.maxWidth),
    height: theme.typography.pxToRem(props.height),

    "&.MuiPaper-rounded": {
      borderRadius: 8,
    },
  }),
  closeBtn: {
    width: "1.5rem",
    height: "1.5rem",
    position: "absolute",
    right: "1rem",
    top: "1rem",
    cursor: "pointer",
    color: "#ccc",
    transition: "all .5s",
    zIndex: 999,

    "&:hover": {
      color: "#ccccccad",
    },
  },
}));

const PrimaryModal = React.memo((props) => {
  const {
    openPrimary,
    togglePrimary,
    hideCrossBtn,
    children,
    scrollType,
  } = props;

  const classes = useStyles(props);

  return (
    <Dialog
      open={openPrimary}
      scroll={scrollType}
      TransitionComponent={Transition}
      transitionDuration={400}
      // keepMounted
      onClose={togglePrimary}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      classes={{ paper: classes.paperRoot }}
      PaperProps={{
        rounded: classes.paperRounded,
      }}
    >
      {!hideCrossBtn && (
        <div onClick={togglePrimary} className={classes.closeBtn}>
          &#10005;
          {/* <Clear /> */}
        </div>
      )}
      {children}
    </Dialog>
  );
});

export default PrimaryModal;
