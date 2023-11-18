const person = {}



const person = {
    firstName: 'ramu',
    age: 250,
    country: 'India',
    city:'Hyderabad',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: '3',
      pobox: 2002,
      city: 'Hyderbad'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }

const copyPerson = Object.assign({}, person)
console.log(copyPerson)

//   Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']

const values = Object.values(copyPerson)
console.log(values)


// Object.entries:To get the keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)

// hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))