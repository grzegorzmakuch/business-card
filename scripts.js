const person = {
  firstName: "Grzegorz",
  lastName: "Mqh",
};

const changeName = (firstName, lastName, exp) => {
  const fullName = document.querySelector(".person__name");
  const position = document.querySelector(".person_position");

  fullName.innerHTML = person.firstName + " " + person.lastName;

  switch (exp) {
    case 1:
      position.innerHTML = "Junior";
      break;
    case 2:
      position.innerHTML = "Mid";
      break;
    case 3:
      position.innerHTML = "Senior";
      break;
    default:
      console.log("Zla wartosc");
  }
};

changeName("Grz", "Mqh", 2);
