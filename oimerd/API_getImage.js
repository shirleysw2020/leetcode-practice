// getSingleImage(url, onDone){}，
// //takes in an url, and make an API call to this URL to get a single image, and once we successfully receive an image, we will invoke the callback functon called onDone. and this is another discussion on whtat the onDone fucntion do.


// async function getSingleImage(url, onDone) {
//   // await is asynchrounous,
//   try {
//     const response = await fetch(url); // get back headers, body, type, status code
//     const data = await response.json(); //get body of response in JSON format
//     onDone(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getSingleImage();

//---//------//------//------//------//------//------//------//------//---
// longer
//---//------//------//------//------//------//------//------//------//---
let getPromise = async() => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('HELLO');
    },500)
  });
}
let getResult = async() => {
  let result = await getPromise();
  console.log(result);
  return result;
}
getResult();

//---//------//------//------//------//------//------//------//------//---
//more succinct
//---//------//------//------//------//------//------//------//------//---
let getPromise = async() => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('HELLO');
    },500)
  }).then(res => {
    console.log(res, 'res');
  })
}
getPromise();

//---//------//------//------//------//------//------//------//------//---
//---//------//------//------//------//------//------//------//------//---

// One of the fundamental principles behind a promise is that it's handled asynchronously. This means that you cannot create a promise and then immediately use its result synchronously in your code (e.g. it's not possible to return the result of a promise from within the function that initiated the promise).

// What you likely want to do instead is to return the entire promise itself. Then whatever function needs its result can call .then() on the promise, and the result will be there when the promise has been resolved.

const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  console.log(people);
});

//---//------//------//------//------//------//------//------//------//---
// USING Promise with fetch API (and handle error)
//---//------//------//------//------//------//------//------//------//---
new Promise((resolve, reject) => {
  return fetch(url).then(response => {
    if (response.ok) {
      resolve(response);
    } else {
      reject(new Error('error'));
    }
  }, error => {
    reject(new Error(error.message));
  })
}).then(data => {
  onDone(data);
})

//---//------//------//------//------//------//------//------//------//---
// make a function to compose the fetching promise
//---//------//------//------//------//------//------//------//------//---
function getPromise() {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve({'country': 'INDIA'});
      }, 1000)
  }).then(function(response) {
    console.log('promise response',response);
    return response;
  })
}
getPromise();//invoke the function to fetch info and return data

//---//------//------//------//------//------//------//------//------//---
//simpler: just make a promise
//---//------//------//------//------//------//------//------//------//---
new Promise(function(resolve, reject) {
  setTimeout(function() {
      resolve({'country': 'CHILE'});
  }, 1000)
}).then(function(response) {
  console.log('promise response',response);
  return response;
})

