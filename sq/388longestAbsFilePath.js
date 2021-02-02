/*
Input: input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
Output: 32
Explanation: We have two files:
"dir/subdir1/file1.ext" of length 21
"dir/subdir2/subsubdir2/file2.ext" of length 32.
We return 32 since it is the longest absolute path to a file.
*/

let input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";

var lengthLongestPath = function(input) {
  if (input === null || input.length === 0) {
    return 0;
  }
  //index based tracker for the length at each lvl of our directory
  let tracker = []
  let ans = 0;
  for (let path of input.split("\n")) {
    //NOTE: '\' does not count in .length
    //the first tab will always be after the newline so its index will be 0
    //each tab after a newline means a new directory, so two means a nested one, level 2;
    let level = path.lastIndexOf("\t") + 1; //if no exist -1 + 1 = 0
    //set tracker at this level to be the length so far
    //check the parent level to add parent's length to current length
    //minus level to rid of the tab character 't'
    tracker[level] = path.length - level + (level > 0 ? tracker[level - 1] : 0);
    if (path.indexOf(".") != -1) {//if cur is a file
      //see if its the longest file path
      //we need to add level to our current path length beacuse we removed our tab
      //but we need to add in a "/" for every level we take
      ans = Math.max(ans, tracker[level] + level)
    }
  }
  return ans;
}

lengthLongestPath(input);