import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import TagPeopleBtn from "./components/buttons/TagPeopleBtn";
import PrimaryModal from "./components/modals/PrimaryModal";
import { usePrimaryModal } from "./components/modals/usePrimaryModal";
import User from "./components/user/User";
import faker from 'faker'
import TagPeopleModal from './components/tag-people-modal/TagPeopleModal'

const useStyles = makeStyles((theme) => ({
  appRoot: {
    padding: "1.2rem",
  },
  tagPeopleBtnRoot: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

function App() {
  const classes = useStyles();
  const { openPrimary, togglePrimary } = usePrimaryModal();

  console.log('faker', faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));


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
        <TagPeopleModal closeModal={togglePrimary} />
      </PrimaryModal>

      <User />
      <TagPeopleBtn
        onClick={togglePrimary}
        className={classes.tagPeopleBtnRoot}
      />
    </div>
  );
}

export default App;
