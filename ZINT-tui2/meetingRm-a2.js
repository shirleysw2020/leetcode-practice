/*
find vacant meeting time among time intervals
*/
// let intervals = [[15,25], [30,45], [15, 20],[50, 80]];
// // after merge: [15,25], [30,45], [50,80]
// // final output = [0,15], [25,30], [45,50]

// let meetingRm = function(intervals) {
//   let vacant = [];
//   intervals.sort((a,b) => a[0] - b[0]);
//   let merged = [intervals[0]];
//   let idx = 0;
//   //start loop from second and put first interval in arr
//   //1st STEP: merge intervals
//   for (let i = 1; i < intervals.length; i++) {
//     if (intervals[i][0] < merged[idx][1]) { // merge
//       if (merged[idx][1] < intervals[i][1]) { //find out which end time to use - the larger one
//         merged[idx][1] = intervals[i][1];
//       }
//     } else { //no merge
//       merged.push(intervals[i]);
//       idx++; //so we can compare next intervals[i] with this new pushed in pair inside of merged
//     }
//   }

//   //2nd STEP: find vacancy
//   if (merged[0][0] > 0) vacant.push([0,0]); //fill in 0 as default
//   for (let j = 0; j < merged.length-1; j++) {
//     if (j == 0) vacant[0][1] = merged[j][0];
//     //always add current's end time, and next start time
//     vacant.push([merged[j][1], merged[j+1][0]]);
//   }
//   return vacant;
// };

// console.log(meetingRm(intervals))


// _____// ____// _____// ____// _____// ____// _____// ____// _____// ____// _____// ____


let meetingRm2 = function(intervals) {
  let arr = [];
  for (let meetings of intervals) {
    for (let meeting of meetings) {
      arr.push([meeting.start, meeting.end])
    }
  }
  // console.log('arr',arr);
  let vacant = [], idx = 0;;
  arr.sort((a,b) => a[0] - b[0]);
  let merged = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] < merged[idx][1]) {
      if (arr[i][1] > merged[idx][1]) {
        merged[idx][1] = arr[i][1];
      }
    } else {
      merged.push(arr[i]);
      idx++;
    }
  }

  if (merged[0][0] > 0) vacant.push([0,0]);
  for (let j = 0; j < merged.length-1; j++) {
    if (j == 0) vacant[0][1] = merged[j][0];
    vacant.push([merged[j][1], merged[j+1][0]]);
  }
  // alternative:
  // for (let i = 0; i < merged.length-1; i++) {
  //   res[i][1] = merged[i][0];
  //   res[i+1] = [merged[i][1], merged[i+1][0]];
  // }
  // return res;
  return vacant;
}
// LC253 similar：2 vectors，one put all start time，the other end time. sort them. then you will find：
// {845，845，930，1230，1300，1515，1600}
// {900，915，1200，1300，1500，1545，2359}
// 进行一轮遍历就能得到他们的meeting时间并集
// {
// {845,915} {930,1200} {1230,1500}{1515,1545}{1600,2359}
// }那么答案：空闲时间就是
// {
// {0,845},{915,930},{1200,1230},{1500,1515},{1545,1600}
// }
let m1 = [
  {"start": 1230, "end": 1300},
  {"start":  845, "end":  900},
  {"start": 1300, "end": 1500},
]
let m2 = [
  {"start":  930, "end": 1200},
  {"start": 1600, "end": 2359},
]
let m3 = [
  {"start":  845, "end":  915},
  {"start": 1515, "end": 1545},
]
let intervals = [m1, m2, m3]

// Expected output:
// meetingRm2(intervals)
// => [    0,  845 ],
//     [  915,  930 ],
//     [ 1200, 1230 ],
//     [ 1500, 1515 ],
//     [ 1545, 1600 ]

console.log(meetingRm2(intervals));