export const addTagPeople = (peopleLists, currentlySelected) => {
  const existingCartItem = peopleLists.find(
    (peopleList) => peopleList.id === currentlySelected.id
  );

  if (existingCartItem) {
    return peopleLists.map((peopleList) => peopleList);
  }

  return [...peopleLists, currentlySelected];
};
