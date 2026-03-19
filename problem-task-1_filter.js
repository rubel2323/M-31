const instructor = [
  { name: "Akhil", age: 28, position: "senior" },
  { name: "nodi", age: 30, position: "junior" },

  { name: "shobuj", age: 29, position: "senior" },
];
const filter = instructor.filter((position) => position.position == "senior");
console.log(filter);
