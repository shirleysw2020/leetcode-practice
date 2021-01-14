/* Cracking the Code Interview
* motorcycles can park in all large, compact, or large spot.
* car can park in compact or large spot
* bus can only park in large spot
*/
class Vehicle {
  this.licensePlate = licensePlate // string
  getSpotNeeded() //return spots needed for a vehicle
  getSize() //return size of a vehicle
}
class Bus extends Vehicle {
  this.size = 'large'
  this.spotsNeeded = 5
  canFitInSpot(ParkingSpot spot) //check if spot is large, doens't check num of spots
}
class Car extends Vehicle {
  this.size = 'compact';
  this.spotsNeeded = 1 //can i call these static? NO! call them constant
  canFitInSpot(ParkingSpot spot) //check if spot is compact or large, doens't check num of spots
}
class Motorcycle extends Vehicle {
  this.size = 'motorcycle';
  this.spotsNeeded = 1
  canFitInSpot(ParkingSpot spot)
}

class ParkingSpot {
  this.spotId = spotId //int
  this.spotSize = spotSize //large, compact, or, motorcycle
  this.level = level //int
  this.row = row //int
  this.vehicle = vehicle //can be null when no car parked
  getRow() //return row number
  getSpotId() //return spotId
  isVacant() //return boolean whether vehicle is null
  canFitVehicle(vehicle) //return boolean whether spot is big enough for vehicle
  removeVehicle() //notify level spot is freed
}

class Level {
  this.floor = floor //int
  this.numOfSpots = numOfSpots;
  this.spots = []; //hold instance of ParkingSpots
  this.spotsPerRow = 10; //static
  this.availableSpots = 0;
  getAvailableSpots() //return availableSpots
  *parkVehicle(vehicle) //park the vehicle in a spot or multiple spots, return false if failed
  - parkStartingAtSpot(spotId, vehicle) // park a vehicle starting at a spot, continue till vehicle.spotNeeded.
  - findAvailableSpots(vehicle)// find a spot to park this vehicle, return index of spot, or -1 on failure.
  spotFreed() //availableSpots++
}

class ParkingLot {
  this.levels = []; //holds object instances of Level class
  this.numOfLevels = 5; //constant
  *parkVehicle(vehicle) //park the vehicle in a spot or multiple spots, return false if failed
  clearSpot(parkingSpot) //remove car from spot and mark as vacant
  canFitInSpot() //return boolean whether a spot is big enough for the vehicle
}

