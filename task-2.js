// task-2: console .log  output: Petersburg, Herry

let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};

// .dot notation
console.log(students[2222].address.city);
const information = students[3333].name;
console.log(information);

const {
  2222: {
    address: { city },
  },
} = students;
console.log(city);

const {
  3333: { name },
} = students;
console.log(name);
