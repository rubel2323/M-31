const oddArray = [1, 3, 5, 7];
let evenArr = [];
for (let array of oddArray) {
  array = array * 2;
  evenArr.push(array);
}

console.log(evenArr);
// using array map
const arrMap = oddArray.map((arrElement) => arrElement * 2);
console.log("the arrMap is", arrMap);

// filter and find
const sampleArr = [33, 50, 79, 78, 90, 101, 30];

const sampleFilter = sampleArr.filter((element) => element % 10 === 0);
console.log("The divisibles are from filter", sampleFilter);
// find() method
const sampleFind = sampleArr.find((element) => element % 10 == 0);
console.log("The divisibles are from find", sampleFind);
