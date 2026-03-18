const person = {
  id: 1,
  name: "habib",
  location: "dhaka",
  address: {
    path: "chowrasta",
    house_no: 55,
    building: {
      block: "A",
      side: "left",
    },
  },
};

console.log(person.address.building.side?.lift);
