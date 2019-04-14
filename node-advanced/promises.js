// Promises replaces callback
const delay = seconds =>
  new Promise((resolves, rejects) => {
    if (seconds > 3) {
      // Always throw errors in Promises inside reject
      rejects(new Error(`${seconds} too long`));
    }
    setTimeout(() => {
      // return value
      resolves(`Resolved after: ${seconds}`);
    }, seconds * 1000);
  });
delay(4)
  .then(returned => console.log(returned, ", Delayed for 2 seconds"))
  .catch(err => console.log(`catching error: ${err}`));

// First Tick
// Returned after: 2 , Delayed for 2 seconds

console.log("First Tick");
