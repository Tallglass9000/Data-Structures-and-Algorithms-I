var arrayStart = [1, 2, 3, 5, 8, 2, 1];

//this code comes from georg at stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
var unique = function (array) {
  var seen = {};
  var valuesNoDups = [];
  var j = 0;

  for (var i = 0; i < array.length; i++) {
    var arrayStartItem = array[i];
    if (seen[arrayStartItem] != 1) {
      seen[arrayStartItem] = 1;
      valuesNoDups[j++] = arrayStartItem;
    }
  }
  console.log(seen);
  console.log(seen[arrayStartItem]);
  console.log(valuesNoDups);

  return valuesNoDups;
}

unique(arrayStart);