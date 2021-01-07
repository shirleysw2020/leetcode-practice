'use strict';

const fs = require('fs');
const https = require('https');

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


const getStockInformation = async(date) => {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
    const response = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`);
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
}

async function main() {