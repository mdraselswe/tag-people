import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import TagPeopleBtn from "./components/buttons/TagPeopleBtn";
import PrimaryModal from "./components/modals/PrimaryModal";
import { usePrimaryModal } from "./components/modals/usePrimaryModal";
import TagGroupBox from "./components/tag-group-box/TagGroupBox";
import TagPeopleModal from "./components/tag-people-modal/TagPeopleModal";
import Tag from "./components/tag/Tag";
import User from "./components/user/User";
import { addTagPeople } from "./lib/addTagPeople";

const useStyles = makeStyles((theme) => ({
  appRoot: {
    padding: "1.2rem",
    display: "flex",
  },
  tagPeopleBtnRoot: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  tagRootBox: {
    paddingLeft: "2rem",
  },
}));

function App() {
  const classes = useStyles();
  const { openPrimary, togglePrimary } = usePrimaryModal();
  const [selectedListArr, setSelectedListArr] = useState([]);

  const isListLength = !!selectedListArr.length;

  const handleList = (list) => {
    setSelectedListArr(addTagPeople(selectedListArr, list));
  };

  const handleTagDelete = (id) => {
    let filterdArray = selectedListArr.filter((list) => list.id !== id);
    setSelectedListArr(filterdArray);
  };

  const renderedTag = () =>
    selectedListArr.map((list) => (
      <Tag key={list.id} {...list} handleDelete={handleTagDelete} />
    ));

  return (
    <div className={classes.appRoot}>
      {/* Modal */}
      <PrimaryModal
        openPrimary={openPrimary}
        togglePrimary={togglePrimary}
        width={570}
        // height={500}
        scrollType="body"
        hideCrossBtn
      >
        <TagPeopleModal
          tagList={renderedTag}
          closeModal={togglePrimary}
          handleList={handleList}
          isListLength={isListLength}
        />
      </PrimaryModal>

      <User />

      <div className={classes.tagRootBox}>{renderedTag()}</div>

      <TagPeopleBtn
        onClick={togglePrimary}
        className={classes.tagPeopleBtnRoot}
      />
    </div>
  );
}

export default App;
