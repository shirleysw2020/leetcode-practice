
//determine if a person can attend all meetings
let meetingRoom = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
              // note! must be length - 1so we are not out of bound
  for (let i = 0; i < intervals.length-1; i++) {
    if (intervals[i][1] > intervals[i+1][0]) {
      return false;
    }
  }
  return true;
}

let intervals = [[0,30],[5,10],[15,20]]//should output false
// let intervals = [[7,10],[2,4]] //output true
console.log(meetingRoom(intervals));