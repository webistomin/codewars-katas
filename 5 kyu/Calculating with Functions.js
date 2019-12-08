// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

const numFunc = num => {
  return function(func) {
    if (func) {
      return func(num);
    }
    return num;
  }
};

const zero = numFunc(0);
const one = numFunc(1);
const two = numFunc(2);
const three = numFunc(3);
const four = numFunc(4);
const five = numFunc(5);
const six = numFunc(6);
const seven = numFunc(7);
const eight = numFunc(8);
const nine = numFunc(9);

const plus = num1 => num2 => {
  return num2 + num1;
};

const minus = num1 => num2 => {
  return num2 - num1;
};

const times = num1 => num2 => {
  return num2 * num1;
};

const dividedBy = num1 => num2 => {
  return Math.floor(num2 / num1);
};

