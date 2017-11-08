
// let
// like var, but block scoped

// i is *not* visible out here

for (let i = 0; i < 5; i++) {
  // i is only visible in here
}

// i is *not* visible out here

// const
// like let, except no reassignment
// WARNING: const DOES NOT IMPLY CONSTANT

const foo = 'foo';
foo = 'bar'; // this will throw an error


// variables declared with `const` can still be mutated

const foo = {
    bar: 'bar'
};
foo['bar'] = 'baz';

// for..of loop (ES6+)
// Used for arrays

var exampleArray = [10, 20, 30];

for (var thing of exampleArray) {
    console.log(thing) // prints the value (e.g. 10);
}

// Arrow functions

const add = (a, b) => {
    const total = a + b;
    return total;
};

const addOne = a => a + 1;

// String templates

const hello = "hello";
const world = "world";

old_string_concat = hello + ", " + world;
with_template = `${hello}, ${world}`;