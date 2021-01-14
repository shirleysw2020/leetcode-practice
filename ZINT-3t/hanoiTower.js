/*
you have 3 towers and N disks of different sizes which can slide onto any tower.The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even larger one).
[1,2,3]

You have the following constraints:

(1) Only one disk can be moved at a time.
(2) A disk is slid off the top of one tower onto the next tower.
(3) A disk can only be placed on top of a larger disk.
Write a program to move the disks from the first tower to the last using stacks.
*/

function hanoi(from, buff, dest, disks) {
  if (disks == 0) return dest;
  else if (disks == 1) {
    let temp = from.shift();
    dest.push(temp);
    return;
  }
  else if (disks == 2) {
    let temp = from.shift(); //move small : from -> buff
    buff.push(temp);

    temp = from.shift(); //move large: from -> dest
    dest.push(temp);

    temp = buff.shift(); //move small: buff -> dest
    dest.push(temp);
    return dest;
  }
  hanoi(from, dest, buff, disks-1);
  hanoi(from, buff, dest, 1);
  hanoi(buff, from, dest, disks-1);
}

console.log(hanoi([1,2,3], [], [], 3))


function stepsToSolveHanoiT(height, srcP, desP, bufferP) {
  if (height >= 1) {
    // Move a tower of height-1 to the buffer peg, using the destination peg.
    stepsToSolveHanoiT(height - 1, srcP, bufferP, desP);
    // Move the remaining disk to the destination peg.
    console.log('Move disk from Tower ', srcP, ' to Tower ', desP);
    // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.
    stepsToSolveHanoiT(height - 1, bufferP, desP, srcP);
  }
  return;
}

console.log(stepsToSolveHanoiT(3, "A", "C", "B"));