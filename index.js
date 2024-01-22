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

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//   const randomIndex = Math.floor(Math.random() * items.length);
//   items.splice(randomIndex, 1);
//   return items;
// }

// const removeRandom = items => {
//     let idx = Math.floor(Math.random() * items.length);
//     return [...items.slice(0, idx), ...items.slice(idx + 1)];
//   }

removeRandom([1, 2, 3, 4]);

console.log([1, 2, 3, 5, 7, 9, 10]);
console.log(removeRandom([1, 2, 3, 5, 7, 9, 10]));

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  return { ...obj, [key]: val };
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}
