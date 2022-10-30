# Promises and Async-Await

## What is a Promise?
Promise is a Javascript object that represents the result of an operation. The Promise object takes two parameters, Resolve and Reject, and gives assurance that the actions specified with Resolve will be performed in positive cases, and the actions specified with Reject in negative cases. The Promise structure counters positive results with .then() and negative results with .catch().
<br/>

***code:***
```javascript

const promise1 = new Promise((resolve, reject) => {
    //reject('ERROR');
    resolve("SUCCESS");
  });
  
  promise1
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    });

// the output would be success in this case
```

## What is Async-Await?
The Async - Await structure came with ES8 and is the Promise structure written with a more understandable syntax. If a function is declared with the async keyword, a Promise is returned as a result of the positive result of the function. If an async function is used with the await keyword, the execution of the async function is suspended until the corresponding Promise returns positive.
<br/>

 ***code:***
```javascript
function getData(data) {
    return new Promise((resolve, reject) => { // returns a promise 
      console.log("Tying to get data..");
  
      if (data) {
        resolve("Received the data"); 
      } else {
        reject("Could not get the data");
      }
    });
  }
  
  function cleanData(receivedData) { // returns a promise 
    return new Promise((resolve, reject) => {
      console.log("Tying to clean data..");
  
      if (receivedData) {
        resolve("Cleaned the data"); 
      } else {
        reject("Could not clean the data");
      }
    });
  }
  
  async function processData() {
    try {// uses the try catch block to catch the error
      const receivedData = await getData(true); // await makes sure that the data is received before the next line is executed
      console.log(receivedData);
      const cleanedData = await cleanData(false); // await makes sure that the data is cleaned before the next line is executed
      console.log(cleanedData); 
    } catch (error) { // if the promise is rejected, the catch block is executed
      console.log(error);
    }
  }
  
  processData();

// Tying to get data..
// Received the data
// Tying to clean data..
// Could not clean the data
```


