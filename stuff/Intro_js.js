
// This is a comment

/*
  This is also a comment
*/


// variable declaration and assignment
var foo = "foo";

// Types:

// Number
var num = 1.2;

// String
var string = "boo!";

// Boolean
var bool = false;

// undefined (i.e. uninitialized)
var undef = undefined;
var alsoUndefined;

// null (i.e. no value)
// similar to undefined, but different?
var nuthin = null;

// Object (i.e. everything else)
var obj = {};
var anotherObj = {
    foo: 'foo',
    bar: 12,
    baz: {}
};

// bracket notation used to mutate properties
var anotherObj['baz'] = null;

// property access through dot or bracket notation
console.log(anotherObj.foo); // prints 'foo'
console.log(anotherObj['foo']); // prints 'foo'

// Operators: +, -, *, /, %, =

var helloWorld = 'hello' + ' ' + 'world';
var five = 2 + 3;
var weird = '3' + 4 + 5;

// Compound operators: +=, -=, *=, /= %=

var counter = 0;
counter = counter + 1;
counter += 1;

// Boolean operators:

var exampleBool = true && (false || 1 > 0);

// will "short-circuit"

var shortCircuit = false && console.log('This will not print');


// Control Structures

// If statements

var name = 'kittens';

if (name === 'puppies') {
  name += ' woof';
} else if (name === 'kittens') {
  name += ' meow';
} else {
  name += '!';
}
name === 'kittens meow';

// Ternary statements

var allowed = (age > 18) ? 'yes' : 'no';

// Switch statement:

animal = 'cow'
switch(animal) {
    case 'cat':
        console.log('meow');
        break;
    case 'cow':
        console.log('moo');
        break;
    default:
        console.log('Animal not found: ' + animal);
}


// While loop

while (true) {
    // infinite loop!
    // Unless we break...
    break;
}

// For loop

var string = '';

for (var i = 0; i < 10, i++) {
    string += i.toString();
}

string === '0123456789';

// for..in loop
// Used for objects

var exampleObject = {
    thing1: 10,
    thing2: 20,
    thing3: 30
};
for (var thing in exampleObject) {
    console.log(thing); // prints the key (e.g. thing1)
    console.log(exampleObject[thing]); // prints the value (e.g. 10)
}

// Functions

function add(x, y) {
    var total = x + y;
    return total;
}

// function expressions

var anotherAdd = function add2(x, y) {
    var total = x + y;
    return total;
}

// Anonymous functions

var yetAnotherAdd = function(x, y) {
    var total = x + y;
    return total;
}