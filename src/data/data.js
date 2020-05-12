import faker from "faker";

export const listOfPeople = [];

Array.from(Array(10).keys()).forEach((e) =>
  listOfPeople.push({ name: faker.name.findName(), src: faker.image.people() })
);

// console.log("peopleList", peopleList);
