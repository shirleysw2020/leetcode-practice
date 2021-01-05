/*
Define a family tree in a language of your choice. For simplicity, assume a single parent, who may have children, who also may have children of their own.
*/
let family = {
  name: 'Lora',
  children: [
    {
      name: 'Lauren',
      children: [
        {name: 'Dan'},
        {name: 'Ben'}
      ]
    },
    {
      name: 'Jenny',
      children: [
        {
          name: 'Ken',
          children: [
            {name: 'Bob'}
          ]
        },
        {name: 'Sharon'}
      ]
    }
  ]
}

let family2 = {
  "name": "Bob",
  "children": [
    {
    "name": "Ann",
    "children":
    [
      {"name": "Steve"},
      {"name": "Clark"}
    ]
    },
    {
    "name": "George",
    "children":
    [
      {"name": "Bill" },
      {
        "name": "Liam",
        "children": [
          {"name": "Shirley"}
        ]
      }
    ]
    }
  ]
}

//---*---*---*---BFS---*---*---*---BFS---*---*---*---BFS---*---*---*---

let traverseFamilyBfs = function(family) {
  let res = [[family.name]];
  let queue = [];
  queue.push(family);
  while (queue.length > 0) {
    let lvlNames = [];
    let size = queue.length; //
    let hasChild = true;
    for (let i = 0; i < size; i++) { //
      let hasChildren = queue.shift().children;
      if (hasChildren) {
        hasChild = true;
        for (let child of hasChildren) {
          queue.push(child);
          lvlNames.push(child.name);
        }
      } else {
        hasChild = false;
      }
    }
    if (hasChild) res.push(lvlNames);
  }
  return res;
}

console.log(traverseFamilyBfs(family2));

//---*---*---*---DFS---*---*---*---DFS---*---*---*---DFS---*---*---*

// let traverseFamilyDfs = function(family) {
//   let res = [];
//   function findChildren(generation, lvl) {
//     if (res[lvl] == null) { //no array yet so make first one
//       res[lvl] = [generation.name];
//     } else { //push current name into existing array
//       res[lvl].push(generation.name);
//     }

//     if (!generation.children) return;

//     for (let child of generation.children) {
//       findChildren(child, lvl+1);
//     }
//   }
//   findChildren(family, 0);
//   return res;
// }

// console.log(traverseFamilyDfs(family));

/*
[
  [ 'Bob' ],
  [ 'Ann', 'George' ],
  [ 'Steve', 'Clark', 'Bill', 'Liam' ],
  [ 'Shirley' ]
]
*/