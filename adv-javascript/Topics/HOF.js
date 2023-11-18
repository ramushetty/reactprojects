// Higher order functions are functions which take other function as a parameter or return a function as a value.
//  The function passed as a parameter is called callback.


// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
  }
  ​
  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
  ​
  console.log(cube(callback, 3))



//   Functional Programming

// forEach
// forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. 
// The index and the array optional.

arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
  })
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)


// map
// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.


const modifiedArray = arr.map(function (element, index, arr) {
    return element
  })


//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)

// [1, 4, 9, 16, 25]


// filter
// Filter: Filter out items which full fill filtering conditions and return a new array.



const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]


//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')

)
console.log(countriesContainingLand)

// ['Finland', 'Ireland']



// reduce
// reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. 
// It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. 
// If our array is an empty array, then Javascript will throw an error.


arr.reduce((acc, cur) => {
    // some operations goes here before returning a value
   return 
  }, initialValue)

  const numbers = [1, 2, 3, 4, 5]
  const sum = numbers.reduce((acc, cur) => acc + cur, 0)
  
  console.log(sum)


//   15



// Set
// Set is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.

const companies = new Set()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)



// Map
  const map = new Map()
  console.log(map)

  countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)





