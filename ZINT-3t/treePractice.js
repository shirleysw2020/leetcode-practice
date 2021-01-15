/*
Define a family tree in a language of your choice. For simplicity, assume a single parent, who may have children, who also may have children of their own.
*/
class Familytree {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChildren(child) {
    this.children.push(child);
  }
  bfsPrintChildren() {
    let res = [[this.name]];
    let queue = [this];
    while (queue.length) {// lways loop while we have smth in queue
      let len = queue.length;
      let temp = [];
      for (let i = 0; i < len; i++) {
        let cur = queue.shift().children;
        if (cur.length > 0) {
          for (let child of cur) {
            queue.push(child);
            temp.push(child.name);
          }
        }
      }
      if (temp.length) res.push(temp); //so we dont push in empty array
    }
    return res;
  }
  dfsPrintChildren() {
    let res = [];
    function findChildren(generation, lvl) {
      if (res[lvl] == null) { //no array yet so make first one
        res[lvl] = [generation.name];
      } else { //push current name into existing array
        res[lvl].push(generation.name);
      }

      if (!generation.children) return;
      for (let child of generation.children) {
        findChildren(child, lvl+1);
      }
    }
    findChildren(this, 0);
    return res;
  }
}

let firstGen = new Familytree('Lora');
let secondGen1 = new Familytree('Lauren');
let secondGen2 = new Familytree('Jenny');
firstGen.addChildren(secondGen1);
firstGen.addChildren(secondGen2);
let thirdGen1 = new Familytree('Dan');
let thirdGen2 = new Familytree('Ben');
let thirdGen3 = new Familytree('Ken');
secondGen1.addChildren(thirdGen1);
secondGen1.addChildren(thirdGen2);
secondGen2.addChildren(thirdGen3);
console.log(firstGen.dfsChildren());

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

// console.log(traverseFamilyBfs(family2));

//---*---*---*---DFS---*---*---*---DFS---*---*---*---DFS---*---*---*

let traverseFamilyDfs = function(family) {
  let res = [];
  function findChildren(generation, lvl) {
    if (res[lvl] == null) { //no array yet so make first one
      res[lvl] = [generation.name];
    } else { //push current name into existing array
      res[lvl].push(generation.name);
    }

    if (!generation.children) return;

    for (let child of generation.children) {
      findChildren(child, lvl+1);
    }
  }
  findChildren(family, 0);
  return res;
}

// console.log(traverseFamilyDfs(family));

/*
[
  [ 'Bob' ],
  [ 'Ann', 'George' ],
  [ 'Steve', 'Clark', 'Bill', 'Liam' ],
  [ 'Shirley' ]
]
*/