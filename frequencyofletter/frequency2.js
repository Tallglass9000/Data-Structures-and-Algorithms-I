var array = ["applllllllllllllle", "banana", "cherry"];

var frequencyLetter = function (array) {
  var arrayJoin = array.join();
  var arrayReplace = arrayJoin.replace(/,/g, "");
  var arraySplit = arrayReplace.split("");
  var count = {};
  var most;

  console.log(arraySplit);

  for (var i = 0; i < arraySplit.length; i++) {
    var letter = arraySplit[i];
    //this code comes from jacquard at http://stackoverflow.com/questions/21519574/determining-character-frequency-in-a-string-javascript
    if (count[letter] === undefined) {
      count[letter] = 0;
      count[letter] += 1;
    //end code

    } else {
      count[letter] += 1;
    }
  }
  console.log(count);

  var countValues = [count];

  console.log(countValues);

  return countValues;
};

var countV = frequencyLetter(array);
console.log(countV);

var findGreatestNumber = function (arrayV) {
  console.log(arrayV);
  var greatestNumber = 0;
  var letter;

  for (key in arrayV[0]) {
    var number = arrayV[0][key];
    
    if (number >= greatestNumber) {
      greatestNumber = number;
      letter = key;
    }
  }
  console.log("The letter that occurs most frequently: " + letter);
  return letter;
};

findGreatestNumber(countV);