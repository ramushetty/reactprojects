// A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. 
// This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a 
// promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.


// A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers 
// queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler 
//     will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)


// As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

// Fetch API
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens




//   Async and Await
// Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

const square = async function (n) {
    return n * n
  }
  
  square(2)

//   Promise {<resolved>: 4}
// The word async in front of a function means that function will return a promise. The above square function instead of a value it returns a promise.

// How do we access the value from the promise? To access the value from the promise, we will use the keyword await.

const square = async function (n) {
    return n * n
  }
  const value = await square(2)
  console.log(value)

//   4


// Async and await go together, one can not exist without the other.

const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }

fetchData()