// can one attend all meetings?
let intervals = [[1300, 1500], [930, 1200],[830, 845]]
// let newMeet = [820, 830]; //return true;
// let newMeet = [1450, 1500]; //return false;
// let newMeet = [829, 844];
let newMeet = [800, 830];

let meetingRm = function(intervals, newMeetMeet) {
  intervals.sort((a,b) => a[0] - b[0]);
  if (intervals[intervals.length - 1][1] <= newMeet[0]) return true;
  //if newMeet start time is before first interval yet it's end time ends after first interval
  if (intervals[0][0] >= newMeet[0] && newMeet[1] > intervals[0][0]) return false;
  for (let i = intervals.length-1; i >= 0; i--) {
    if (intervals[i][0] >= newMeet[0]) continue; //insert at i+1
    if (intervals[i][1] > newMeet[0] || newMeet[1] > intervals[i+1][0]) return false;
  }
  return true;
}


//2nd method slightly different
let meetingRm = function(intervals, newMeet) {
  intervals.sort((a,b) => a[0] - b[0]); //ascending by start
  if (newMeet[0] >= intervals[intervals.length-1][1]) return true;
  if (newMeet[0] < intervals[0][0] && newMeet[1] <= intervals[0][0]) return true;
  for (let i = intervals.length-1; i >= 0; i--) {
    if (intervals[i][0] > newMeet[0]) continue;
    if (intervals[i][1] <= newMeet[0] && newMeet[1] <= intervals[i+1][0]) return true;
  }
  return false;
}

console.log(meetingRm(intervals, newMeet));