class Admin {
  //monitoring how many cars enteringg, exiting
  - feeCollected // String
  + carArrival(carCount) //call decrease or increase vacancy method
  + carExit(carCount)//call decrease or increase vacancy method
}
class Lot {
  //capacity 20k
  - capacity //String
  - occupiedSpots // String
  - entrances // Array of N E S W
  - exits // Array same
  + hasVaccancy() //String
  + increaseVaccancy(carCount) //Car enter
  + decreaseVaccancy(carCount) //Car leave
}
// - - - - -
class ParkingSpot {
  - id
}

class handicapParkingSpot extends ParkingSpot {
}
class compactParkingSpot extends ParkingSpot {
}
class largeParkingSpot extends ParkingSpot {
}
class motorcycleParkingSpot extends ParkingSpot {
}

class ParkingTicket {
  - id
  - parkingSpotId
  - parkingSpotType
  - issueTime
}

class Terminal {
  + getId()
}

class EntryTerminal extends Terminal {
  + getTicket(parkingSpotType);
}
class EntryTerminal extends Terminal {
  + getTicket(ticket);
}

class ParkingAssignmentStrategy {
  + getParkingSpot(entryTerminalId); //return parkingSpotId
  + releaseparkingSpot(parkingSpotId)
}

class ParkingNearEntryStrategy {
  //implement algorithm to figure out nearest parking spot to a customer's entrance
}

class Car {
  - carType //String (Handicap, motorcycle, compact, large)
  - entryLocation //String
  - entryTime //String
  - paymentType //String (cash or credit)
  - parkedLocation //String call getParkingLocation
}

// class parkingType?
class Location {
  //take note of car's entrance and type of car
  //find closest parking spot according to entrance
  - capacity //String
  - entrances // Array of N E S W
  + getParkingLocation(entryLocation, carType) //Strin ex: A25
}

class parkingTicket {
  //takes cash or credit card
  - id
  - parkingSpotId
  - parkingSpotType
  - hourlyRate //String
  + collectFee(startTime, endTime, paymentType) // calculate total time parked * hourly rate
}