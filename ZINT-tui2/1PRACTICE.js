function findMidpointCourse(pairs) {
  // Your code here.
  // input: nested list of strings | output: string
  // General idea is using topological sort to figure out the order of taking the courses

  let prereq = new Map(); // store relationships of precourse and course
  let indegree = new Map(); // store indegree of each course a.k.a. how many prerequisets
  let mid = Math.floor(pairs.length / 2); // for odd num of courses
  if (pairs.length % 2 === 0) mid - 1; // even num return first course

  for (let courses of pairs) {
    prereq.set(courses[0], courses[1]);
    if (!indegree.has(courses[0])) indegree.set(courses[0], 0);
    if (!indegree.has(courses[1])) indegree.set(courses[1], 0);
    indegree.set(courses[1], indegree.get(courses[1]) + 1);
  }

  let queue = [];
  for (let [course, count] of indegree) {
    if (count == 0) {
      queue.push(course);
      break; // found first class to take
    }
  }

  while (mid > 0) {
    let midClass = queue.shift();
    queue.push(prereq.get(midClass));
    mid--;
  }
  console.log(queue.pop());
  return queue.pop();
}

console.log(findMidpointCourse(pairs))