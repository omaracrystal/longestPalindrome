function longestPalindrome(string) {
    var longest = '';
    //loop through string
    for (var i = 0; i < string.length; i++) {
      //current character of string
      var currChar = string[i];
      //finding characters of string that matches first occurance
      var firstOccur;
      for (var j = i + 1; j < string.length; j++) {
        if (currChar === string[j]) {
          //once occurance that matches the current letter is found:
          firstOccur = j;
          //generate the substring to match
          var subString = string.slice(i, firstOccur + 1);
          // check if substring is a palindrom and if it is longer then longest
          if (subString.length > longest.length &&
              subString.toLowerCase() === subString.split('').reverse().join('').toLowerCase()) {
                longest = subString;
          }
        }
      }
    }
    //returning longest palindrome including white space
    return longest;
  }

module.exports = longestPalindrome;
