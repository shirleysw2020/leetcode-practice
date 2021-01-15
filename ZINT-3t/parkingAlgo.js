/*
find closest parking spot to given entrance - O(log n)
*/let parkingLot = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0], //2rd row
  [0,0,0,0,0], //3rd row
  [0,0,1,0,0], //[4,2] is entrance
];

/*
use minheap a.k.a. priority queue
have an queue  that  stores spots{distance to entrance} where distance is ascending. So  when we want the closest spot we just get the first parkingSpot in the queue which has the least distance value.
*/
class ParkingLot {
  constructor() {
    this.spots = []; //a min heap
    this.lot = [
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0], //2rd row
      [0,0,0,0,0], //3rd row
      [0,0,1,0,0], //[4,2] is entrance
    ];
  }
  makeParkingSpots() {
    let rows = this.lot.length;
    let spots = this.lot[0].length;
    let entrance = [rows-1, Math.floor(spots/2)]; //calc bot. middle entrance
    let id = 1;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < spots; j++) {
        if (i == entrance[0] && j == entrance[1]) continue;
        let distance = Math.abs(i - entrance[0]) + Math.abs(j - entrance[1]);
        let newSpot = new ParkingSpot([i, j], distance, id);
        this.insert(newSpot);
        id++;
      }
    }
  }
  parkVehicle(vehicle) {
    let closestSpot = this.getClosestSpot();
    let row = closestSpot.spot[0];
    let col = closestSpot.spot[1];
    parkingLot[row][col] = vehicle.id //[2,1]
    vehicle.spot = closestSpot.spot;
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
    let minDistSpot = this.spots[0];
    this.spots[0] = this.spots.pop();
    this.sinkDown(0);
    return minDistSpot;
  }
  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;
    let len = this.spots.length;
    if (left < len && this.spots[left].distance < this.spots[smallest].distance) {
      smallest = left;
    }
    if (right < len && this.spots[right].distance < this.spots[smallest].distance) {
      smallest = right;
    }
    if (smallest !== index) {
      [this.spots[index], this.spots[smallest]] = [this.spots[smallest], this.spots[index]];
      this.sinkDown(smallest);
    }
  }
}

class ParkingSpot {
  // this.spotNum = spotNum; //1-25
  constructor(spot, distance, id) {
    this.spot = spot //array of x and y
    this.distance = distance;
    this.id = id;
  }
}

class Vehicle {
  constructor(id, spot) {
    this.id = id;
    this.spot = null;
  }
}
/*
this step puts parkingspot and their distance into parkinglot
// let storeDistance = (parkingLot) => {
//   let rows = parkingLot.length;
//   let spots = parkingLot[0].length;
//   let entrance = [rows-1, Math.floor(spots/2)];
//   for (let i = 0; i < parkingLot.length; i++) {
//     for (let j = 0; j < parkingLot[0].length; j++) {
//       if (i == entrance[0] && j == entrance[1]) continue;
//       let distance = Math.abs(i - entrance[0]) + Math.abs(j - entrance[1]);
//       let newSpot = new ParkingSpot([i, j], distance);
//       // lot.spots.push(newSpot); //we will replace with heap's insert method
//       lot.insert(newSpot);
//     }
//   }
// }
// let lot = new ParkingLot();
// storeDistance(parkingLot);
*/
let lot = new ParkingLot();
lot.makeParkingSpots();
let log = console.log;
// log(lot.spots);
// log(lot.getClosestSpot());
// log(lot.spots.length);
let carA = new Vehicle(1);
lot.parkVehicle(carA);
// log(lot.spots);
// log(parkingLot);