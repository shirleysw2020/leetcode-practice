const input = [
  ['art1', 'art2'],
  ['history', 'journal']
  ['art1', 'art5'],
  ['math', 'cs1']
  ['cs1', 'cs2'],
  ['chrome', 'cs2']
];
/*art1, history, math, chrome,  */
let courseSchedule = function(courses) {
  //if class only exist in key, t does not require prereq.
  let prereq = new Map();

  for (let course of courses) {
    if (!prereq.has(course[0])
  }
}