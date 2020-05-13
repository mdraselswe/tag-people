import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { ReactComponent as TagIcon } from "../../assets/tag.svg";
import { listOfPeople } from "../../data/data";
import BackBtn from "../buttons/BackBtn";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SearchInput from "../inputs/SearchInput";
import PeopleList from "../people-list/PeopleList";
import TagGroupBox from "../tag-group-box/TagGroupBox";

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

const TagPeopleModal = ({ closeModal, handleList, tagList, isListLength }) => {
  const classes = useStyles();

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

      <TagGroupBox isListLength={isListLength}>{tagList()}</TagGroupBox>

      {isListLength && (
        <div className={classes.doneBtnRoot}>
          <PrimaryBtn title="Done" onClick={closeModal} />
        </div>
      )}

      <PeopleList listPeople={listOfPeople} handleList={handleList} />
    </div>
  );
};

export default TagPeopleModal;
