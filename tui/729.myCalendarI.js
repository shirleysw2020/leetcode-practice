var MyCalendar = function() {
  this.cal = [];
};

/**
* @param {number} start
* @param {number} end
* @return {boolean}
*/
//time complexity: O(logN)
MyCalendar.prototype.book = function(start, end) {
  let l = 0;
  let r = this.cal.length-1;
  while (l <= r) {
    let mid = Math.floor((l+r)/2);
    let [s, e] = this.cal[mid];
    if (s < end && e > start) return false;
    if (s < start) {
      l = mid+1;
    } else {
      r = mid-1;
    }
  }
  this.cal.splice(l,0,[start,end]);
  return true;
}