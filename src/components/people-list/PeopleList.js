import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

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
  listItemTextSecondary: {
    color: "rgba(0, 70, 95, .5)",
    fontSize: 12,
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
    maxHeight: 255,
    overflow: "auto",
  },
  textRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemRoot: {
    paddingTop: 5,
    paddingBottom: 5,
  },
}));

export default function PeopleList({ listPeople, handleList }) {
  const classes = useStyles();

  return (
    <div className={classes.peopleListRoot}>
      <Typography className={classes.listHeader}>Select people</Typography>

      <List classes={{ root: classes.listRoot }}>
        {listPeople.map((list, value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              button
              classes={{
                gutters: classes.listItemGutter,
                button: classes.listItemButton,
                root: classes.listItemRoot,
              }}
              onClick={() => handleList(list)}
              disabled={list.isDisabled}
            >
              <ListItemAvatar classes={{ root: classes.listItemAvatarRoot }}>
                <Avatar
                  variant="rounded"
                  alt={`Avatar n°${value + 1}`}
                  // src={`/static/images/avatar/${value + 1}.jpg`}
                  src={`${list.src}`}
                  classes={{
                    root: classes.listAvatarRoot,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.listItemTextPrimary,
                  root: classes.textRoot,
                  secondary: classes.listItemTextSecondary,
                }}
                id={labelId}
                primary={`${list.name}`}
                secondary={list.message}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
