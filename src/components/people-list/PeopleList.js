import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  peopleListRoot: {
    marginTop: 14,
  },
  listItemTextPrimary: {
    color: "#263251",
    fontSize: 12,
    fontWeight: 500,
    fontFamily: "Roboto",
  },
  listAvatarRoot: {
    width: 25,
    height: 25,
  },
  listItemAvatarRoot: {
    minWidth: 35,
  },
  listItemGutter: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  listItemButton: {
    "&:hover": {
      background: "#DDE2EF",
    },
  },
  listHeader: {
    color: "rgba(38, 50, 81, 0.5)",
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 14,
    paddingLeft: 12,
  },
  listRoot: {
    maxHeight: 185,
    overflow: "auto",
  },
}));

export default function PeopleList({ listPeople }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  console.log(checked);

  return (
    <div className={classes.peopleListRoot}>
      <Typography className={classes.listHeader}>Select people</Typography>

      <List classes={{ root: classes.listRoot }}>
        {listPeople.map((e, value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              button
              classes={{
                gutters: classes.listItemGutter,
                button: classes.listItemButton,
              }}
              onClick={handleToggle(value)}
            >
              <ListItemAvatar classes={{ root: classes.listItemAvatarRoot }}>
                <Avatar
                  variant="rounded"
                  alt={`Avatar n°${value + 1}`}
                  // src={`/static/images/avatar/${value + 1}.jpg`}
                  src={`${e.src}`}
                  classes={{
                    root: classes.listAvatarRoot,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{ primary: classes.listItemTextPrimary }}
                id={labelId}
                primary={`${e.name}`}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
