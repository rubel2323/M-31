const people = [
  { name: "rubel", age: 30 },
  { name: "rasel", age: 25 },
  { name: "fahid", age: 24 },
];
let sum = 0;
for (const person of people) {
  sum += person.age;
}
console.log("the sum from loop is", sum);

const reduction = people.reduce(
  (accumalator, current) => accumalator + current.age,
  0,
);
console.log(reduction);
