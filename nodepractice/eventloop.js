// Timers Phase
setTimeout(() => {
    console.log('Timers Phase: setTimeout() callback executed');
  }, 0);
  
  // I/O Callbacks Phase
  const fs = require('fs');
  fs.readFile('example.txt', (err, data) => {
    if (err) throw err;
    console.log('I/O Callbacks Phase: File read complete');
  });
  
  // Idle/Prepare Phase (internal to Node.js)
  setImmediate(() => {
    console.log('Idle/Prepare Phase: setImmediate() callback executed');
  });
  
  // Poll Phase
  const server = require('http').createServer();
  server.on('request', (req, res) => {
    res.end('Poll Phase: Request processed');
  });
  server.listen(6000, () => {
    console.log('Poll Phase: Server listening on port 3000');
  });
  
  // Check Phase
  setImmediate(() => {
    console.log('Check Phase: setImmediate() callback executed');
  });
  
  // Close Callbacks Phase
  server.on('close', () => {
    console.log('Close Callbacks Phase: Server closed');
  });



//================================================


setImmediate(function A() {
    console.log("1st immediate");
});
 
setImmediate(function B() {
    console.log("2nd immediate");
});
 
process.nextTick(function C() {
    console.log("1st process");
});
 
process.nextTick(function D() {
    console.log("2nd process");
});
 
// First event queue ends here
console.log("program started");
  



//=============================================

//**Callbacks deferred with process.nextTick() run before any other I/O event is fired, while with setImmediate(), the execution is queued behind any I/O event that is already in the queue.


//  	process.nextTick() 	                                         
// 1. process.nextTick() fires immediately on the same phase	
// 2. Its benefit is that it has no time bound to take a callback.	
// 3. process.nextTick() function is specific to the Node.js Event Loop	
// 4. 	Its syntax is:process.nextTick(callback); 
// 5. 	It has a benefit that it has the potential to cause I/O starvation

// setImmediate() 
// 1.setImmediate() fires on the following iteration or ‘tick’ of the event loop
// 2.setImmediate() method is only processed on the check handler phase of the event loop
//setImmediate() method is called in the poll phase and it’s callback functions are invoked in the check phase.
// 3.It is generally found in the Timers module
// 4.Its syntax is -:setImmediate(callback); 
// 5.Its return value is a unique timer identifier that can be used in another function call.


