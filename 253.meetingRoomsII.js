/**
 *
 * 253. Meeting Rooms II
 *
 * @param {number[][]} intervals
 * @return {number}
 *
 *
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
*/

var minMeetingRooms = function(intervals) {

  if (intervals == null || intervals.length == 0) return 0;
  if (intervals.length == 1) return 1;
  // sort by start time
  intervals.sort((a,b) => a[0] - b[0]);
  let rooms = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
      // sort by end time and get the earliest end time room
      let room = getEarliestRoom(rooms);
      // no conflict. we merge
      // if the room ends before the current interval starts, use the room and update the room end time to current
      if (room[1] <= intervals[i][0]) {
          room[1] = intervals[i][1];
      } else {
          // conflict. add room
          rooms.push(intervals[i]);
      }
  }

  function getEarliestRoom(r) { // sort by end time and get the earliest end time room
      r.sort((a,b) => a[1]-b[1])
      return r[0]
  }

  return rooms.length;
};

//Sort the given meetings by their start time.
// Initialize a new min-heap and add the first meeting's ending time to the heap. We simply need to keep track of the ending times as that tells us when a meeting room will get free.
// For every meeting room check if the minimum element of the heap i.e. the room at the top of the heap is free or not.
// If the room is free, then we extract the topmost element and add it back with the ending time of the current meeting we are processing.
// If not, then we allocate a new room and add it to the heap.
// After processing all the meetings, the size of the heap will tell us the number of rooms allocated. This will be the minimum number of rooms needed to accommodate all the meetings.