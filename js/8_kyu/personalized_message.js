const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;

console.log(greet('Daniel', 'Daniel'));
