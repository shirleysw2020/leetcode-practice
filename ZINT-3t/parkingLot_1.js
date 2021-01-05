/* Cracking the Code Interview
* motorcycles can park in all large, compact, or large spot.
* car can park in compact or large spot
* bus can only park in large spot
*
*/
class Vehicle {
  - parkingSpots = [];
  - licensePlate
  - size
  - spotNeeded
  + getSpotNeeded() //return size of spot
  + getSize() //return size
  + parkInSpot(ParkingSpot spot) {
    parkingSpots.push(spot);
  }
  + clearSpot(ParkingSpot) //remove car from spt and notify spot that it's gone
  + canFitInSpot() //return boolean whether a spot is big enough for the vehicle
}

class Bus extends Vehicle {
  - size = 'large'
  - spotsNeeded = 5
  + canFitInSpot(ParkingSpot spot) //check if spot is large, doens't check num of spots
}
class Car extends Vehicle {
  - size = 'compact';
  - spotsNeeded = 1 //can i call these static? NO! call them constant
  + canFitInSpot(ParkingSpot spot) //check if spot is compact or large, doens't check num of spots
}
class Motorcycle extends Vehicle {
  - size = 'motorcycle';
  - spotsNeeded = 1
  + canFitInSpot(ParkingSpot spot)
}

class ParkingLot {
  - levels = []; //holds object instances od Level class
  - numOfLevels = 5; //static
  + parkVehicle(Vehicle vehicle) //park the vehicle in a spot or multiple spots, return false if failed
}

class Level {
  - floor = this.floor //int
  - numOfSpots = this.numOfSpots;
  - spots = []; //hold instance of ParkingSpots
  - spotsPerRow = 10; //static
  - availableSpots = 0;
  + availableSpots() //return availableSpots
  + parkVehicle(Vehicle vehicle) //park the vehicle in a spot or multiple spots, return false if failed
  + parkStartingAtSpot(num, Vehicle v) // park a vehicle starting at the spot number and continue until vehicle.spotNeeded.
  + findAvailableSpots(Vehicle v)// find a spot to park this vehicle, return index of spot, or -1 on failure.
  + freeSpot() //availableSpots++
}

class ParkingSpot {
  - this.spotNumber = spotNumber
  - this.spotSize = spotSize
  - this.level = level
  - this.row = row

  getRow() //return row number
  getSpotNumber() //return spotNumber
  isAvailable() //return boolean whether spot is available
  canFitVehicle() //return boolean whether spot is big enough for vehicle
}