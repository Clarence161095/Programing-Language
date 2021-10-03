var isDate = function (date) {
  const newDate = new Date(date);
  return newDate !== "Invalid Date" && !isNaN(newDate);
};

const today = new Date("2021-09-30").getTime();
console.log(today);
console.log(Date.now());

// let e = "today";
// let dateString = "1968-11-16T00:00:00";
// let newDate = new Date(e);
// console.log(newDate);
