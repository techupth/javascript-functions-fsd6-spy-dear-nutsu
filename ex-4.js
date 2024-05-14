// Start coding here
let calculator = {
  add: (a, b) => {
    let result = a + b;
    return result;
  },
  subtract: (a, b) => {
    let result = a - b;
    return result;
  },
  multiply: (a, b) => {
    let result = a * b;
    return result;
  },
  devide: (a, b) => {
    let result = a / b;
    return result;
  }
};

let addResult = calculator.add(10, 20);
console.log(addResult);

let devideResult = calculator.devide(3000, 10);
console.log(devideResult);
