// 1071. Greatest Common Divisor of Strings

let GCD = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  } else if (str1 == str2) {
    return str1;
  } else if (str1.length > str2.length) {
    return GCD(str1.slice(str2.length), str2);
  } else {
    return GCD(str2.slice(str1.length), str1);
  }
}