function directionReduction(directions) {

  let opposites = {
      "NORTH" : "SOUTH",
      "EAST" : "WEST",
      "SOUTH" : "NORTH",
      "WEST" : "EAST"
  };

  function reduceDirection(start, curDirections) {
      if (start >= curDirections.length-1) return curDirections;

      if (opposites[curDirections[start]] == curDirections[start+1]) {
          curDirections.splice(start, 2);
          return reduceDirection(0, curDirections);
      } else {
          return reduceDirection(start+1, curDirections);
      }
  }

  return reduceDirection(0, directions);
}

console.log(directionReduction(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "SOUTH", "NORTH", "WEST"]));