/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.


var canAttendMeetings = function(intervals) {
  if (intervals.length == 0) return true;

  let sort = intervals.sort((a,b) => {
      return a[0] - b[0];
  });

  for (var i = 1; i < sort.length; i++) {
      if (sort[i][0] < sort[i-1][1] && sort[i][0] >= sort[i-1][0]) {
          return false;
      }
  }
  return true;
};