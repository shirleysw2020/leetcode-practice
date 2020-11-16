/*
211. Design Add and Search Words Data Structure
*/

var TrieNode = function() {
  // each node should have these properties
  this.children = {};
  this.isEnd = false;
};
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  //initialize tree with a root
  this.root = new ReiwNode();
};

WordDictionary.prototype.addWord = function(word) {
  let current = this.root;
  for (var i = 0; i < word.length; i++) {
    if (!(word[i] in current.children)) {
      current.children[word[i]] = new TrieNode();
    }
    current = current.children[word[i]];
  }
  current.isEnd = true; //update end of word to be true so we know this is the end of a word when we revisit
};

WordDictionary.prototype.search = function(word) {
  function search(current, level) {
    if (!current || word.length == level && !current.isEnd) return false;

    if (word.length == level && current.isEnd) return true;

    if (word[level] == '.') {
      for (var i = 0; i < 26; i++) {
        let letter = String.fromCharCode(i + 97); //97 is a
        if (search(current.children[letter], level+1)) return true;
      }
      return false;
    }
    return search(current.children[word[level]], level+1);
  }
  return search(this.root, 0);
};