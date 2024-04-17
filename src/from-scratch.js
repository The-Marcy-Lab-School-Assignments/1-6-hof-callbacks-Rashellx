//Question 1
const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
const myForEach = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]))
  }
  return
};
const result = (name) => console.log(`Hi, ${name}!`);
console.log(myForEach(myNames, result))



//Question 2
const myNums = [1, 4, 9, 16];
//console.log(myNums)

const myMap = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]))
  }
  return newArr
};
const myDoubledNums = myMap(myNums, (x) => x * 2);
console.log(myDoubledNums);
// expected output: [2, 8, 18, 32]
console.log(myNums);
// expected output: [1, 4, 9, 16] unaffected!



//Question 3
const myNames2 = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
console.log(myNames2)

const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++)
    if (callback(arr[i])) {
      return arr[i]
    } return undefined
};
const nameHasB = myFind(myNames2, (name) => name.includes('B'));
console.log(nameHasB);


//Question 4
const myFilter = (arr, callback) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const namesWithB = myFilter(myNames2, (name) => name.includes('B'));
console.log(namesWithB); // ['Bob', 'Barry']
const namesWithZ = myFilter(myNames2, (name) => name.includes('Z'));
console.log(namesWithZ); // []

//Question 5
const sortWords = (arr) => {
  const newArr2 = [...arr];
  return newArr2.sort()
};

const unsortedNames = ['Charlie', 'Debbie', 'Alice', 'Bob'];
const sortedNames = sortWords(unsortedNames);

console.log(unsortedNames); // ['Charlie', 'Debbie', 'Alice', 'Bob']
console.log(sortedNames); // ['Alice', 'Bob', 'Charlie', 'Debbie']

//Question 6
const sortNumbers = (arr) => {
  const newArr3 = [...arr];
  return newArr3.sort((a, b) => a - b)
};

const unsortedNums = [1, 100, 14, 3, 2, 11];
const sortedNums = sortNumbers(unsortedNums);

console.log(sortedNums); // [1, 2, 3, 11, 14, 100]
console.log(unsortedNums); // [1, 100, 14, 3, 2, 11]


//Question 7
const sortNumbersBetter = (arr, isDescending) => {
  const newArr3 = [...arr];
  if (isDescending === true) {
    return newArr3.sort((a, b) => b - a)
  } else {
    return newArr3.sort((a, b) => a - b)
  }
};
const unsortedNums1 = [1, 100, 14, 3, 2, 11];
const bigToSmall = sortNumbersBetter(unsortedNums1, true);
console.log(bigToSmall); // [100, 14, 11, 3, 2, 1]


//Question 8
const sortUsersByOrder = (arr) => {
  const newArr4 = [...arr];
  return newArr4.sort((a, b) => a.order - b.order);
};

const users = [
  { name: 'Alice', order: 1 },
  { name: 'Bob', order: 3 },
  { name: 'Charlie', order: 2 },
  { name: 'Debbie', order: 4 },
];

const sortedUsers = sortUsersByOrder(users);
console.log(sortedUsers);
// [
//   { name: 'Alice', order: 1 },
//   { name: 'Charlie', order: 2 },
//   { name: 'Bob', order: 3 },
//   { name: 'Debbie', order: 4 },
// ]



//Question 9
const sortUsersByName = (arr) => {
  const newArr5 = [...arr]
  newArr5.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return newArr5
};
const users1 = [
  { name: 'Alice', order: 1 },
  { name: 'Bob', order: 3 },
  { name: 'Charlie', order: 2 },
  { name: 'Debbie', order: 4 },
];

const sortedUsers1 = sortUsersByOrder(users1);
console.log(sortedUsers1);
// [
//   { name: 'Alice', order: 1 },
//   { name: 'Charlie', order: 2 },
//   { name: 'Bob', order: 3 },
//   { name: 'Debbie', order: 4 },
// ]


module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
