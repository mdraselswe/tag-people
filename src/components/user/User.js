import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  userRoot: {
    display: "flex",
    alignItems: "center",
  },
  userAvatarRoot: {
    width: 52,
    height: 52,
  },
  userName: {
    marginLeft: 12,
    fontSize: 13,
    color: "#000000",
  },
}));

const User = () => {
  const classes = useStyles();

  return (
    <div className={classes.userRoot}>
      <Avatar
        variant="rounded"
        alt="Remy Sharp"
        // src={`${faker.image.people()}`}
        classes={{
          root: classes.userAvatarRoot,
        }}
      />
      <Typography className={classes.userName}>
        {/* {faker.name.findName()} */}
        Harold Cooper
      </Typography>
    </div>
  );
};

export default User;
