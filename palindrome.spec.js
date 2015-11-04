var longestPalindrome = require('./palindrome');


describe('longestPalindrome()', function() {

  it('finds the longest palindrome, including whitespace', function() {
    var string = 'I am a dazzaled racecar driver';
    expect(longestPalindrome(string)).toEqual('d racecar d');
  });

});
