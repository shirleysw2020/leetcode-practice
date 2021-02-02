let racer = function() {
  setImmediate(() => console.log("immediate"));
  setTimeout(() => console.log("timeout"), 0);
  process.nextTick(() => console.log("nextTick"));
  console.log("current event loop");
}

racer();


// function printing() {
//   console.log(1);
//   setTimeout(function() { console.log(2); }, 1000);
//   setTimeout(function() { console.log(3); }, 0);
//   console.log(4);
// }
// printing();

//1
//4
// undefined
//3
//2

// setTimeout(() => { console.log(2); }, 1000);
// function say() {
//   console.log('hi');
// }
// say();