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

// I think that the answer with the print() method on the prototype is wrong, because  using arrow function there will cause the this keyword point to the window obejct not the actual array bc its lexicaly scoped. He should use plain function like Array.prototype.print = function(){this.map(e => console.log(e)} instead.

/*simple solution 2:
*/
Array.prototype.print =function() {
  console.log(this.join(','));
};
[1,2,3,4,5,6].print();

// if you need to use the this keyword no don't use arrow function.

