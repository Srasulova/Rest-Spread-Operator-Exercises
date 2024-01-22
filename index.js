// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);
console.log(filterOutOdds(2, 5, 7, 8));

const findMin = (...nums) => Math.min(...nums);

console.log(findMin(1, 4, 12, -3));

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// const doubleAndReturnArgs = (arr, ...args) => [
//   ...arr,
//   ...args.map((arg) => arg * 2),
// ];

const doubleAndReturnArgs = (arr, ...args) => {
  arr.push(...args.map((arg) => arg * 2));
  return arr;
};
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
