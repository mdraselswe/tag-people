import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import TagPeopleBtn from "./components/buttons/TagPeopleBtn";
import PrimaryModal from "./components/modals/PrimaryModal";
import { usePrimaryModal } from "./components/modals/usePrimaryModal";
import User from "./components/user/User";

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

  return (
    <div className={classes.appRoot}>
      {/* Modal */}
      <PrimaryModal
        openPrimary={openPrimary}
        togglePrimary={togglePrimary}
        width={530}
        scrollType="body"
        hideCrossBtn
      >
        Hello
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
