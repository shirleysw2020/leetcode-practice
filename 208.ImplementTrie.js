/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.trie = {};
};
/**
* Inserts a word into the trie.
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word, T = this.trie) {
  for (let letter of word) {
      if (!T[letter]) {
          T[letter] = {};
      }
      T = T[letter];
  }
  T.word = true;
  //T: {a: {p: {p: {l: {e: {word: true}}}}}}
};
/**
* Returns if the word is in the trie.
* @param {string} word  @return {boolean}
*/
Trie.prototype.search = function(word, T = this.trie) {
  for (let letter of word) {
      if (!T[letter]) return false;
      // update curren T for next loop
      T = T[letter];
  }
  return !!T.word;
};

/**
* Returns if any word in the trie starts with given prefix.
* @param {string} prefix  @return {boolean}
*/
Trie.prototype.startsWith = function(prefix, T = this.trie) {
  // check for the flag true of word property
  for (let letter of prefix) {
      if (!T[letter]) {
          return false;
      }
      // update curren T for next loop
      T = T[letter];
  }
  return true;
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/