var arrayToPopFrom = [1, 2, 3, 4, 5];

var popIt = function (array) {
  array.splice((array.length - 1), 1);

  console.log(array);
  return array;
};
popIt(arrayToPopFrom);

console.log(arrayToPopFrom);

exports._test = {
  arrayToPopFrom: arrayToPopFrom,
  popIt: popIt
}