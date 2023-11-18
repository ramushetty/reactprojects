const myModule = (function() {
    // Private variables and functions
    let privateVariable = 'Hello, I am private';

    function privateFunction() {
        console.log(privateVariable);
    }

    // Public API
    return {
        publicMethod: function() {
            // Access to private function
            privateFunction();
        },
        publicVariable: 'I am a public variable'
    };
})();

// Usage
myModule.publicMethod(); // Outputs: 'Hello, I am private'
console.log(myModule.publicVariable); // Outputs: 'I am a public variable'

// Trying to access private details
console.log(myModule.privateVariable); // Uncaught ReferenceError: privateVariable is not defined



// The Module Pattern in JavaScript is a way to create private and public variables and functions. It's like having a box where you can keep some things private 
// (only for use inside the box) and make other things public (available for use outside the box). This pattern is great for organizing your code and keeping parts
//  of it hidden from the outside world, reducing the risk of naming conflicts or accidental interference.

// The Module Pattern uses closures, a powerful feature in JavaScript where inner functions have access to the variables and functions defined in the outer 
// function.

// This pattern is really useful for creating more secure and well-organized code, especially in larger applications.

