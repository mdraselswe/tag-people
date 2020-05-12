import React from "react";
import BackBtn from "./components/buttons/BackBtn";
import Tag from "./components/tag/Tag";
import PrimaryBtn from './components/buttons/PrimaryBtn'
import SearchInput from './components/inputs/SearchInput'
import TagPeopleBtn from './components/buttons/TagPeopleBtn'

function App() {
  return (
    <div className="App">
      <h2>Tag People</h2>
      <BackBtn  />
      <Tag />
      <div>
        <PrimaryBtn title="done" />
      </div>
      <div>
        <TagPeopleBtn />
      </div>
    </div>
  );
}

export default App;
