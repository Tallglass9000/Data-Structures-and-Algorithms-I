var arrayToUnshiftTo = [2, 3, 4, 5];

var unshiftIt = function (array, itemToUnshift) {
  array.splice(0, 0, itemToUnshift);

  console.log(array);
  return array;
};
unshiftIt(arrayToUnshiftTo, 1);

console.log(arrayToUnshiftTo);

exports._test = {
  arrayToUnshiftTo: arrayToUnshiftTo,
  unshiftIt: unshiftIt
};