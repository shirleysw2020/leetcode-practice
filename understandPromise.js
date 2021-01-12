// //---//------//------//------//------//------//------//------//------//---
// // longer
// //---//------//------//------//------//------//------//------//------//---
let getImage = async() => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('HELLO');
    },500)
  });
}
let getResult = async() => {
  let result = await getImage();
  console.log(result);
  return result;
}
getResult();

// //---//------//------//------//------//------//------//------//------//---
// //more succinct. this is using a hybrid of .then and async await
// //---//------//------//------//------//------//------//------//------//---
let getPromise = () => {
  just replace the new Promise with a await fetch:
  let response = await fetch(URL)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.blob();
  }

let getPromise = async() => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('HELLO');
    },500)
  }).then(res => {
    console.log(res, 'res');
  }).catch(e)
}
getPromise();

// //---//------//------//------//------//------//------//------//------//---
// //---//------//------//------//------//------//------//------//------//---

// // One of the fundamental principles behind a promise is that it's handled asynchronously. This means that you cannot create a promise and then immediately use its result synchronously in your code (e.g. it's not possible to return the result of a promise from within the function that initiated the promise).

// // What you likely want to do instead is to return the entire promise itself. Then whatever function needs its result can call .then() on the promise, and the result will be there when the promise has been resolved.


// //---//------//------//------//------//------//------//------//------//---
// // USING Promise with fetch API (and handle error)
// //---//------//------//------//------//------//------//------//------//---
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

// //---//------//------//------//------//------//------//------//------//---
// // make a function to compose the fetching promise
// //---//------//------//------//------//------//------//------//------//---
let getPromis = async() => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve({'country': 'INDIA'});
      }, 1000)
  }).then((response) => {
    console.log('promise response',response);
    return response;
  })
}
getPromis();//invoke the function to fetch info and return data

// //---//------//------//------//------//------//------//------//------//---
// //simpler: just make a promise
// //---//------//------//------//------//------//------//------//------//---
new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve({'country': 'CHILE'});
  }, 1000)
}).then((response) => {
  console.log('promise response',response);
  return response;
})

