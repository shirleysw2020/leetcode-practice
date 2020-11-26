//oa
/*
DataStructures Algorithms 4
FoundationsOfCS OperatingSystems 6
ComputerNetworks ComputerArchitecture 2
Algorithms FoundationsOfCS 5
ComputerArchitecture DataStructures 3
SoftwareDesign ComputerNetworks 1
*/
/*
input: [][] : [
  [SoftwareDesign ComputerNetworks],
  [ComputerNetworks ComputerArchitecture],
  [ComputerArchitecture DataStructures],
  [DataStructures Algorithms],
  [Algorithms FoundationsOfCS],
  [FoundationsOfCS OperatingSystems]
]
output: string: DataStructures
*/
// const input = [
//   ['ComputerNetworks', 'ComputerArchitecture'],
//   ['SoftwareDesign', 'ComputerNetworks'],
//   ['ComputerArchitecture', 'DataStructures'],
//   ['DataStructures', 'testing'],
//   ['testing', 'Algorithms'],
//   ['Algorithms', 'FoundationsOfCS'],
//   ['FoundationsOfCS', 'OperatingSystems']
// ];
const input = [
  ['SoftwareDesign', 'ComputerNetworks'],
  ['ComputerNetworks', 'test2'],
  ['test2', 'test3'],
  ['test3', 'ComputerArchitecture'],
  ['ComputerArchitecture', 'DataStructures'],
  ['DataStructures', 'testing'],
  ['testing', 'Algorithms'],
  ['Algorithms', 'FoundationsOfCS'],
  ['FoundationsOfCS', 'OperatingSystems']
];
let courseSchedule = function(courses) {
  let m = new Map(); // tracks course and prereq relationship
  let indegree = new Map(); //tracks num of precourse needed
  let mid;
  if (courses.length % 2 == 0) { //we want the halfway course, diff for even and odd length
    mid = Math.floor((courses.length+1)/2);
  } else {
    mid = Math.floor((courses.length)/2);
  }
  for (let pair of courses) { //O(n) or O(V + E)where v is vertices and e is edges
    m.set(pair[0], pair[1]);
    if (!indegree.has(pair[0])) {
      indegree.set(pair[0], 0);
    }
    if (!indegree.has(pair[1])) {
      indegree.set(pair[1], 0);
    }
    indegree.set(pair[1], indegree.get(pair[1]) + 1);
  }
  let queue = [];
  for (let pair of indegree) { //O(n)
    if (pair[1] == '0') {
      queue.push(pair[0]);
      break;
    }
  }
  while (mid) { //O(n/2)
    let cur = queue.shift();
    queue.push(m.get(cur));
    mid--;
  }
  return queue.pop();
}

console.log(courseSchedule(input));

//space: O(n)

// const input = [
//   ['SoftwareDesign', 'ComputerNetworks'],
//   ['ComputerNetworks', 'test2'],
//   ['test2', 'test3'],
//   ['test3', 'ComputerArchitecture'],
//   ['ComputerArchitecture', 'DataStructures'],
//   ['DataStructures', 'testing'],
//   ['testing', 'Algorithms'],
//   ['Algorithms', 'FoundationsOfCS'],
//   ['FoundationsOfCS', 'OperatingSystems']
// ];

    // if (!indegree.has(pair[0])) {
    //   indegree.set(pair[0], 0); //no prereq is 0
    // } else {
    //   indegree.set(pair[0], indegree.get(pair[0])+1);
    // }
    // if (!indegree.has(pair[1])) {
    //   indegree.set(pair[1], 1); //need prereq is 2
    // } else {
    //   indegree.set(pair[1], indegree.get(pair[1])+1);
    // }