function commonPrefixLength(str) {
  let suffix = str;
  let res = [];

  for (let i = 0; i < str.length; i++) {
    let commonPrefix = findcommonPrefix(suffix, 0, 0); //calculate common prefix length
    res.push(commonPrefix);
    suffix = suffix.slice(1); //update suffix
  }

  function findcommonPrefix(suffix, i, j) {
    let ct = 0;
    while (j < suffix.length) {
      if (str[i++] == suffix[j++]) ct++;
      else {return ct}
    }
    return ct;
  }
  return res;
}

let str = 'abcabcd';
console.log(commonPrefixLength(str));