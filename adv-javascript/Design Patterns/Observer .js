// Subject
class Subject {
    constructor() {
        this.observers = []; // Array of observer functions
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

// Observers
const observer1 = (data) => console.log(`Observer 1: ${data}`);
const observer2 = (data) => console.log(`Observer 2: ${data}`);

// Usage
const subject = new Subject();

// Two observers subscribe to the subject
subject.subscribe(observer1);
subject.subscribe(observer2);

// Subject notifies all observers
subject.notify('Hello World!'); // Observer 1: Hello World! and Observer 2: Hello World! get logged

// Unsubscribe observer1
subject.unsubscribe(observer1);

// Notify again
subject.notify('Second Message'); // Only Observer 2: Second Message gets logged



// The Observer Pattern in JavaScript is like a newsletter subscription. Imagine you're interested in a particular topic and you subscribe to a 
// newsletter about it. Whenever there's new information (like an article), you get notified. Similarly, in the Observer Pattern, an object 
// (called the "subject") maintains a list of its dependents (called "observers"), and it automatically notifies them about any state changes, 
// usually by calling one of their methods.

// In programming, this is useful when you want to create a system where an object needs to be able to notify other objects without knowing 
// who these objects are (i.e., remain decoupled).