// // const money = (cash) => {
// //   return cash.reduce(
// //     (sum, item) => (sum += item.den * item.count),0
// //   );
// // };
// const money = (cash) => {
//   return cash
//     .map((item) => item.count * item.den)
//     // sum(accumulator) is 0(provided as initial val) val is current value
//     .reduce((sum, val) => sum + val, 0);
//     //[0+(100*0), 0+20, 20+30]
// };


// const cash = [
//   {
//     den:100,
//     count:0
//   },
//   {
//     den:20,
//     count:1
//   },
//   {
//     den:10,
//     count:3
//   }
// ]

// console.log(money(cash));

[1,3,5,7,9].reduce((acc, cur) => {
  console.log('hello', acc, cur);
  return acc + cur;
});