// let names = ['Philippe I', 'Philip II', 'David LX', 'David XL', 'David IX'];
//9 xl-40  lx-60
let names = ['Steven XL', 'Steven XVI', 'Mary XV', 'Mary XIII', 'Mary XX', 'Philippe I', 'Philip II', 'David LX', 'David XL', 'David IX'];

function sortName(names) {
  let pair = [];
  let map = new Map();
  let letters = new Map([['I', 1],['V', 5], ['X', 10], ['L', 50]]);

  names.sort();
  for (let name of names) {
    let values = name.split(" ");
    let num = values[1], person = values[0];

    pair.push([person, num]);
    let romatoInt = romanToInteger(num);
    if (!map.has(person)) map.set(person, [romatoInt]);
    else (map.get(person).push(romatoInt));
  }

  function romanToInteger(roman) {
    let i = roman.length - 1;
    let res = letters.get(roman[i]);;
    while (i > 0) {
      let cur = letters.get(roman[i]);
      let prev =letters.get(roman[i-1]);
      if (prev < cur) {
        res -= prev;
      } else {
        res += prev;
      }
      i--;
    }
    return res;
  }

  let result = [];
  for (let [name, nums] of map) {
    if (nums.length > 1) nums.sort((a,b) => a - b);
    for (let val of nums) {
      result.push([`${name} ${val}`]);
    }
  }
  return result;
}

console.log(sortName(names));

