let input = [
  ['Jane', 'A'],
  ['Bob', 'B'],
  ['Amy', 'A'],
  ['Jane', 'B'],
  ['Amy', 'B'],
  ['Jane', 'C'],
  ['Amy', 'F'],
  ['John', 'F']
];
/*
// [Jane, Bob]: [B],
// [Jane, Amy]: [A, B],
// [Bob, Amy]: [B]
*/

let commonCourses = function(input) {
  let set = new Set(); // students
  let res = new Map(); // 2 students to their common classes
  let student = new Map(); // student to student's classes
  for (let item of input) { //o(n)
    set.add(item[0]);
    if (!student.has(item[0])) student.set(item[0], [item[1]]);
    else (student.get(item[0]).push(item[1]));
  }

  //construct a pair of uniq students in res
  let person = Array.from(set);
  for (let i = 0; i < person.length-1; i++) { //o(n2)
    for (let j = i+1; j < person.length; j++) {
      let combined = [];
      combined = [...student.get(person[i]), ...student.get(person[j])];
      let sharedCourse = findDuplicate(combined);
      res.set([person[i],person[j]], sharedCourse);
    }
  }
  let result = '';
  for (let [key, val] of res) {
    result += key + ': ' + val + '\n';
  }
  return result;
}

function findDuplicate(courses) {
  let dup = [];
  let unique = new Set(courses);
  for (let i = courses.length-1; i >= 0; i--) {
    if (!unique.has(courses[i])) dup.push(courses[i]);
    else (unique.delete(courses[i]));
  }
  return dup;
}

console.log(commonCourses(input));