/*
given array of strings, find all combinations and

example:
input: ['up', 'down']
output: [
  ['up'],
  ['down'],
  ['up', 'down'],
  ['down', 'up'],
]
  */
  // call findAllAnagram on each character
let anagrams = [];
function callAnagram(word) {
  const wordSize = word.length;
  return allAnagrams(wordSize, word);
}

var allAnagrams = function(wordSize, word, anagram = '') {
  // if word is empty than push it into anagram result
  if (!word) {
    anagrams.push(anagram);
    return;
  }

  if (anagram.length >= 1 && anagram.length < wordSize) {
    anagrams.push(anagram);
  }

  for (let i = 0; i < word.length; i++) {
    // select letter our anagram begins with (every letter if of input word will have a chance to be first letter)
    anagram += word[i];
    // call fn again without the letter we just added into anagram
    allAnagrams(wordSize, word.slice(0,i) + word.slice(i + 1), anagram);
    // slice out last letter
    anagram = anagram.slice(0, anagram.length - 1);
  }
};

callAnagram('abcd'); //this is our word to work with
console.log(anagrams);


  // if (anagram.length == 1) {
  //   anagrams.push(anagram);
  // }

  // if (anagram.length == 2) {
  //   anagrams.push(anagram);
  // }