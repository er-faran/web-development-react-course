// Variables - var, let, const

function getData() {
  const name = "Alex"; // can not be changed and only access inside function
  let currentClass = 11; // can be changed and only access inside function
  var currentDay = "Monday";
  currentClass = 12;
}

getData();

// Expressions - (+, -, *, /, %, ++, --)
// console.log("add : ", 3 + 3);
// console.log("sub : ", 3 - 3);
// console.log("mul : ", 3 * 3);
// console.log("div : ", 3 / 3);
// console.log("mod : ", 5 % 3);

let count = 10;

// console.log("++ : ", count--);
// console.log(count);

// flow control
function getNumberData(num) {
  //   if (num > 0) {
  //     console.log(num, " is positive");
  //   } else if (num < 0) {
  //     console.log(num, " is negative");
  //   } else {
  //     console.log(num, " is zero");
  //   }
  //   num > 0
  //     ? console.log(num, " is positive")
  //     : num < 0
  //     ? console.log(num, " is negative")
  //     : console.log(num, " is zero");
}

getNumberData(10);

// Ternary Operator
// const name = "Renuka123";
// name === "Renuka" ? console.log(true) : console.log(false);

function getWeekData(dayCount) {
  switch (dayCount) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 7:
      return "Sunday";
      break;
    default:
      return "Not a valid count";
      break;
  }
}

// console.log("day", getWeekData(8));

// Loops

const myFriends = ["one", "two", "three"];
// for (let i = 0; i < myFriends?.length; i++) {
//   console.log(myFriends[i]);
// }

// let i = 0;
// while (i < myFriends?.length) {
//   console.log(myFriends[i]);
//   i++;
// }

// Map
myFriends.map((item, index) => {
  console.log(item, index);
});

// Filter
// const filteredData = myFriends.filter((item) => {
//   return item === "two";
// });
const filteredData = myFriends.filter((item) => item === "two");
// console.log(filteredData);

// Reduce
const data = [1, 2, 3, 4, 5];
const sum = data.reduce((acc, item) => acc + item, 0);

const MyObject = {
  a: 10,
  n: { m: 20 },
  v: "kasbec",
};

// string literals
const sL = `Sum of array is ${sum}.`;

console.log(sL);
