/*
981. Time Based Key-Value Store Medium

Create a timebased key-value store class TimeMap, that supports two operations.

1. set(string key, string value, int timestamp)

Stores the key and value, along with the given timestamp.
2. get(string key, int timestamp)

Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
If there are multiple such values, it returns the one with the largest timestamp_prev.
If there are no values, it returns the empty string ("").


Example 1:

Input: inputs = ["TimeMap","set","get","get","set","get","get"], inputs = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
Output: [null,null,"bar","bar",null,"bar2","bar2"]
Explanation:
TimeMap kv;
kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1
kv.get("foo", 1);  // output "bar"
kv.get("foo", 3); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"
kv.set("foo", "bar2", 4);
kv.get("foo", 4); // output "bar2"
kv.get("foo", 5); //output "bar2"
*/

/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
  this.map = new Map();
};

TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, []);
  }
  this.map.get(key)[timestamp] = value;
}

TimeMap.prototype.get = function(key, timestamp) {
  if (!this.map.has(key)) return '';
  //map has same key same timestamp, return right away
  let item = this.map.get(key);
  if (item[timestamp]) return item[timestamp];
  //map has same key but different timestamp
  while (timestamp > 0) {
    if (item[timestamp]) return item[timestamp];
    timestamp--;
  }
  // when we have the key but the timestap is above input timestamp, it's not valid
  return '';
}