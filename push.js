var arrayToPushTo = [1, 2, 3];
var j = 0;

var pushIt = function (array, itemToPush) {
  array[array.length] = itemToPush;

  console.log(array);
  return array;
};

pushIt(arrayToPushTo, 4);

exports._test = {
  arrayToPushTo: arrayToPushTo,
  pushIt: pushIt
};