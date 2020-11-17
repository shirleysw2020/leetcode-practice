/*
  print num from array with comma between by implementing the print() method
*/
Array.prototype.print = function() {
  let res = '';
  console.log(this);
  for (var i = 0; i < this.length; i++) {
    if (i == this.length-1) {
      // res+=`${this[i]}`; or interpolation works too
      res += this[i];
    } else {
      // res+=`${this[i]},`; or interpolation works too
      res += this[i] + ',';
    }
  }
  console.log(res)
  return res;
}

let arr = [1,2,2,4];
arr.print();
