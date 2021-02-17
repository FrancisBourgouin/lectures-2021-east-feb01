const fs = require('fs');
const { start } = require('repl');
// Filesystem

const startTime = Date.now()
console.log('wiggle')
console.log(Date.now() - startTime)

// Open a file
// Read character per character
// When finished, it will stop to read
// Tell node that it finished reading the file emit the event of finished
// Node listens to an event finished, and does the callback

fs.readFile('./fs.js', { encoding: "utf8" }, (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log(Date.now() - startTime)
});

// console.log(startTime)