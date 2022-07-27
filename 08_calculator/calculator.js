const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(item => sum += item);
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  arr.forEach(item => result *= item);
  return result;
};

const power = function(num, power) {
  let result = 1;
	for (let i = 0; i < power; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(x) {
	let factorial = 1;
  for (let i = 1; i <= x; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
