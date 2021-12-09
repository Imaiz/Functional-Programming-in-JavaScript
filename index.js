// 1.Pure Function
function addPure(a, b) {
  return a + b;
}
console.log("Pure Function: ", addPure((a = 1), (b = 6)));

// 2.Avoid Side Effect
const c = 16;
function addSideEffect(a) {
  return a + c;
}

console.log("Side Effect: ", addSideEffect((a = 1)));

// 3.First class function
// 3.1 Assigning a function to a variable
const addAssingning = function (a, b) {
  return a + b;
};

console.log("Assigning: ", addAssingning((a = 1), (b = 6)));

// 3.2 Returning a function
function addReturning(a, b) {
  return function () {
    return a + b;
  };
}
const addTwoNumber = addReturning((a = 1), (b = 6));

console.log("Returning: ", addTwoNumber());

// 3.3 Accepting a function as an argument
function addNumber(a, b) {
  return a + b;
}

function addAccepting(add, a, b) {
  return add(a, b);
}

console.log("Accepting: ", addAccepting(addNumber, (a = 1), (b = 6)));

// EP2
// 4. Higher order functions
const persons = [
  { name: "John", age: 17 },
  { name: "Jane", age: 10 },
  { name: "Jim", age: 15 },
];

// filter
const kids = [];
for (let i = 0; i < persons.length; i++) {
  const person = persons[i];
  if (person.age <= 15) {
    kids.push(person);
  }
}
console.log("kids: ", kids);