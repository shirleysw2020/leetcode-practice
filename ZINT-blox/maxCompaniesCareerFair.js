/*
 find max number of companies the career fair can host

 we first put the arrival and duration in to a interval [a, b] format where a is start time b is end time
 and sort by end time ascending
 and if next interval's start time collide with oreviou end time then we know we need to drop one event
 we keep ptrack of events to drop and ...
 calculate how many events we can keep by subtracting drops from total events

*/

let arrival = [1,3,3,5,7];
let duration = [2,2,1,2,1];

function maxCompanies(arrival, duration) {
  let interval = [];
  //make inputs into time intervals for ease of use
  for (let i = 0; i < arrival.length; i++) {
    let temp = [ arrival[i], arrival[i] + duration[i] ];
    interval.push(temp);
  }
  //sort by end time ascending
  interval.sort((a,b) => a[1] - b[1]);
  console.log(interval)
  let drop = 0;
  let curTime = interval[0][1]; //first events end time
  for (let j = 1; j < interval.length; j++) {
    //if next event starts before cur event end time, then we need to drop
    if (interval[j][0] < curTime) {
      drop++;
    } else {
      curTime = interval[j][1];
    }
  }
  return arrival.length - drop;
}

console.log(maxCompanies(arrival,duration));