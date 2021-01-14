/*
find closest parking spot to given entrance
*/let parkingLot = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0], //2rd row
  [0,0,0,0,0], //3rd row
  [0,0,1,0,0], //[4,2] is entrance
];

/*
use minheap a.k.a. priority queue
have an queue  that  stores spots{distance to entrance,location by coordinates} where distance is ascending. So  when we want the closest spot we just get the first parkingSpot in the queue which has the least distance value.
*/
class ParkingLot {
  constructor() {
    this.spots = []; //a min heap
  }
  insert(spot) {
    this.spots.push(spot);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.spots.length-1;
    while (index > 0) {
      let parentIdx = Math.floor((index-1)/2);
      let parent = this.spots[parentIdx];
      let cur = this.spots[index];
      if (parent.distance <= cur.distance) break;
        this.spots[index] = parent;
        this.spots[parentIdx] = cur;
        index = parentIdx;
    }
  }
  getClosestSpot() {

  }
  sinkDown() {}
}

let lot = new ParkingLot();

class ParkingSpot {
  // this.spotNum = spotNum; //1-25
  constructor(spot, distance) {
    this.spot = spot //array of x and y
    this.distance = distance
  }
  parkVehicle(vehicle) {}
}

//this step puts parkingspot and their distance into parkinglot
let storeDistance = (parkingLot) => {
  let rows = parkingLot.length;
  let spots = parkingLot[0].length;
  let entrance = [rows-1, Math.floor(spots/2)];
  for (let i = 0; i < parkingLot.length; i++) {
    for (let j = 0; j < parkingLot[0].length; j++) {
      if (i == entrance[0] && j == entrance[1]) continue;
      let distance = Math.abs(i - entrance[0]) + Math.abs(j - entrance[1]);
      let newSpot = new ParkingSpot([i, j], distance);
      // lot.spots.push(newSpot); //we will replace with heap's insert method
      lot.insert(newSpot);
    }
  }
}
storeDistance(parkingLot);
let log = console.log;
log(lot.spots);
log(lot.spots.length);

//thie step inserts every spot into the min heap/priority queue

