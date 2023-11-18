// The Singleton pattern is a design pattern that ensures a class has only one instance and provides a global point of access to it. 
// In simple terms, think of it as a way to create a single object of a certain type that is shared across your entire application. 
// This is useful when you want to have just one point of control or access for a specific resource, like a database connection or a configuration object.



let instance;

class Singleton {
    constructor() {
        if (!instance) {
            instance = this;
        } else {
            return instance;
        }

        // properties or methods of the Singleton
        this.data = 'Singleton Data';
    }

    getData() {
        return this.data;
    }

    setData(newData) {
        this.data = newData;
    }
}

// Usage
const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2); // true

singleton1.setData('New Singleton Data');
console.log(singleton2.getData()); // 'New Singleton Data'







// const singleton = (function() {
//     let instance;
//     function createInstance() {
//         const object = new Object("I am the instance");
//         return object;
//     }
//     return {
//         getInstance: function() {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     };
// })();

// const instance1 = singleton.getInstance();
// const instance2 = singleton.getInstance();
// console.log(instance1 === instance2); // true

