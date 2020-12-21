'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getMaxUnits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER_ARRAY boxes
 *  2. LONG_INTEGER_ARRAY unitsPerBox
 *  3. LONG_INTEGER truckSize
 */

function getMaxUnits(boxes, unitsPerBox, truckSize) {
    // Write your code here
    let pairs = [];
    let res = 0;
    // console.log(boxes);
    for(var i = 0; i < boxes.length; i++) {
        let temp = [boxes[i], unitsPerBox[i]];
        pairs.push(temp);
    }
    pairs.sort((a,b) => a[1] - b[1]);
    let k = pairs.length - 1;
    // console.log(k);
    while (k >= 0 && truckSize > 0) {
        let units = pairs[k][1];
        let remain = pairs[k][0];
        let load = truckSize >= remain ? remain : truckSize;
        res += units * load;
        truckSize -= load;
        k--;
    }

    return res;
}

14787154029457228
12113268179724504

function main() {

console.log(getMaxUnits([1,1], [1,2],2));