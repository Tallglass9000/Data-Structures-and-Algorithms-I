var arrayToShiftFrom = [1, 2, 3, 4, 5];

var shiftIt = function (array) {
  array.splice(0, 1);

  console.log(array);
  return array;
};
shiftIt(arrayToShiftFrom);

console.log(arrayToShiftFrom);

exports._test = {
  arrayToShiftFrom: arrayToShiftFrom,
  shiftIt: shiftIt
};