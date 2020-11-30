let func = function() {
  {
    let l = 'let';
    let v = 'var';
  }
  console.log(l);
  console.log(v);
}
func();

CONVERT TO:

let func = function() {
  {
    (function scope() {
      let l = 'let';
      let v = 'var';
    }();
  }
  console.log(l);
  console.log(v);
}