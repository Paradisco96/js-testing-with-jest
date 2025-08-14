const sum = function (a, b) {
return a + b;
}

const devide = (a, b) => {
if (b === 0) {
  throw new Error('Zero cannot be a divisor');
}
return a / b
};



export  { sum, devide };