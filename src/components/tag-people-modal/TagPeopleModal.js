import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ReactComponent as TagIcon } from "../../assets/tag.svg";
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
    position: "relative",
    // marginBottom: "1rem",
  },
  doneBtnRoot: {
    padding: 8,
    paddingBottom: 0,
    textAlign: "center",
  },
  modalTitle: {
    margin: "0 auto",
    color: "rgba(38, 50, 81, 0.8)",
    fontSize: 16,
    fontWeight: 500,
    padding: 3,
  },
  backBtn: {
    position: "absolute",
    left: 12,
    top: 10,
  },
  searchRoot: {
    padding: "0 12px 15px 12px",
  },
  tagIcon: {
    marginRight: 10,
  },
}));

const TagPeopleModal = ({
  closeModal,
  handleList,
  tagList,
  isListLength,
  filteredList,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.modalRoot}>
      <div className={classes.modalHeader}>
        <BackBtn onClick={closeModal} className={classes.backBtn} />

        <Typography className={classes.modalTitle}>
          <TagIcon className={classes.tagIcon} />
          Tag People
        </Typography>
      </div>

      <div className={classes.searchRoot}>
        <SearchInput />
      </div>

      <TagGroupBox isListLength={isListLength}>{tagList()}</TagGroupBox>

      {isListLength && (
        <div className={classes.doneBtnRoot}>
          <PrimaryBtn title="Done" onClick={closeModal} />
        </div>
      )}

      <PeopleList listPeople={filteredList} handleList={handleList} />
    </div>
  );
};

export default TagPeopleModal;
