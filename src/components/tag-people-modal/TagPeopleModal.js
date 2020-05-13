import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { ReactComponent as TagIcon } from "../../assets/tag.svg";
import BackBtn from "../buttons/BackBtn";
import SearchInput from "../inputs/SearchInput";
import PeopleList from "../people-list/PeopleList";
import { listOfPeople } from "../../data/data";
import Typography from "@material-ui/core/Typography";
import TagGroupBox from "../tag-group-box/TagGroupBox";
import PrimaryBtn from "../buttons/PrimaryBtn";
import Tag from "../tag/Tag";

const useStyles = makeStyles((theme) => ({
  modalRoot: {
    // padding: 12
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    padding: "9px 12px",
  },
  doneBtnRoot: {
    padding: 8,
    textAlign: "center",
  },
}));

const TagPeopleModal = ({ closeModal }) => {
  const classes = useStyles();
  const [listPeople, setListPeople] = useState(listOfPeople);

  return (
    <div className={classes.modalRoot}>
      <div className={classes.modalHeader}>
        <BackBtn onClick={closeModal} />

        <Typography>
          <TagIcon />
          Tag People
        </Typography>
      </div>

      <SearchInput />

      <TagGroupBox></TagGroupBox>
      <div className={classes.doneBtnRoot}>
        <PrimaryBtn title="Done" />
      </div>

      <PeopleList listPeople={listPeople} />
    </div>
  );
};

export default TagPeopleModal;
