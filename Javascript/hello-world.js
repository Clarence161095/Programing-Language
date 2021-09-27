const test = ["test", "test2", "test3", "test4"];

const convertObjectToString = (input) => {
  return input.reduce((acc, val, index) => {
    acc[index] = val;
    return acc;
  }, {});
};

console.log(convertObjectToString(test));
