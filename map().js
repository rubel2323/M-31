const mapDigit = (n) => n / 2;
const digit = [4, 5, 6, 7];
const output = digit.map(mapDigit);
console.log(output);
// single line of code
const names = ["rubel", "sumaiya", "shopon"];
const doubled = names.map((n) => {
  return n[0].toUpperCase();
});
console.log(doubled);
