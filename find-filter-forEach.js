const numbers = [55, 70, 80, 90, 0, 120, 340, 730];
const findNumber = numbers.find((digit) => digit > 80);
const filterNumber = numbers.filter((digit) => digit > 80);
console.log("The find-number property is", findNumber);
console.log("the filter number is", filterNumber);
const for_Each = numbers.forEach((n) => {
  console.log(n * n);
});
