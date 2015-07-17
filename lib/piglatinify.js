module.exports = function(word) {
  var wordArray = word.toLowerCase().split("");
  var letters, changedWord;

  var vowelHash = { a: 1, e: 1, i: 1, o: 1, u: 1 };

  //Check if first letter is a vowel. If so, return new word
  if (vowelHash.hasOwnProperty(wordArray[0])) {
    wordArray[0] = wordArray[0].toUpperCase();
    return wordArray.join("") + "-hay";
  }

  var count = 1;
  //Check next two letters to see if they are vowels
  while (count < 3) {
    //If so, return word
    if (vowelHash.hasOwnProperty(wordArray[count])) {
      letters = wordArray.splice(0, count);
      wordArray[0] = wordArray[0].toUpperCase();
      return wordArray.join("") + "-" + letters.join("") + "ay";
    } else {
    //If not, increment count
      count++;
    }
  }

  //If first three letters were all constanents, return word
    letters = wordArray.splice(0, 3);
    wordArray[0] = wordArray[0].toUpperCase();
    return wordArray.join("") + "-" + letters.join("") + "ay";
};
