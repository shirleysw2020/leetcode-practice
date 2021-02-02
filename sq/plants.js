
n == 2
return 1
< 2
return 0
n == 3
return 2

let plantGorwth = (n) => {
  let newPlant = 1;
  let oldPlant = 0;
  while (n > 0) {
    if (n == 2) {
      newPlant += oldPlant;
    }
    n++;
  }
}
newPlant = 0(2 wks)
old plant ct = 0;(1 wk) every 1 wk add to newPlant

new plant takes 2 wks to mature
old every 1 wk - new plant!