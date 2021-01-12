// // One of the fundamental principles behind a promise is that it's handled asynchronously. This means that you cannot create a promise and then immediately use its result synchronously in your code (e.g. it's not possible to return the result of a promise from within the function that initiated the promise).

// // What you likely want to do instead is to return the entire promise itself. Then whatever function needs its result can call .then() on the promise, and the result will be there when the promise has been resolved.

// getSingleImage(url, onDone){}，
// //takes in an url, and make an API call to this URL to get a single image, and once we successfully receive an image, we will invoke the callback functon called onDone. and this is another discussion on whtat the onDone fucntion do.

onDone = (data) => {
  console.log(data[3]);
};

fetchBeers = (param) => {
  fetch(`https://api.punkapi.com/v2/beers?${param}`)
    .then((data) => data.json())
    .then((beers) => {
      this.onDoney(beers);
      this.setState({ beers });
    })
    .catch((error) => {
      console.log(error);
    });
};


fetchBeers = async (param) => {
  try {
    const response = await fetch(`https://api.punkapi.com/v2/beers?${param}`); // get back headers, body, type, status code
    const beers = await response.json(); //get body of response in JSON format
    this.setState({ beers });
    this.onDone(beers);
  } catch (err) {
    console.log(err);
  }
};


// //---//------//------//------//------//------//------//------//------///

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

// //---//------//------//------//------//------//------//------//------//

