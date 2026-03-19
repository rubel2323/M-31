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
