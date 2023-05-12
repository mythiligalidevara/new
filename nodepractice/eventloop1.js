import fs from 'fs';
import http from 'http';
    
const options = {
  host: 'www.stackoverflow.com',
  port: 80,
  path: '/index.html'
};

describe('deferredExecution', () => {
  it('deferredExecution', (done) => {
    console.log('Start');
    setTimeout(() => console.log('setTimeout 1'), 0);
    setImmediate(() => console.log('setImmediate 1'));
    process.nextTick(() => console.log('nextTick 1'));
    setImmediate(() => console.log('setImmediate 2'));
    process.nextTick(() => console.log('nextTick 2'));
    http.get(options, () => console.log('network IO'));
    fs.readdir(process.cwd(), () => console.log('file system IO 1'));
    setImmediate(() => console.log('setImmediate 3'));
    process.nextTick(() => console.log('nextTick 3'));
    setImmediate(() => console.log('setImmediate 4'));
    fs.readdir(process.cwd(), () => console.log('file system IO 2'));
    console.log('End');
    setTimeout(done, 1500);
  });
});


//Use setImmediate if you want to queue the function behind whatever I/O event callbacks that are already in the event queue. Use process.nextTick to effectively queue the function at the head of the event queue so that it executes immediately after the current function completes.

//will give the following output

// Start // synchronous
// End // synchronous
// nextTick 1 // microtask
// nextTick 2 // microtask
// nextTick 3 // microtask
// setTimeout 1 // macrotask
// file system IO 1 // macrotask
// file system IO 2 // macrotask
// setImmediate 1 // macrotask
// setImmediate 2 // macrotask
// setImmediate 3 // macrotask
// setImmediate 4 // macrotask
// network IO // macrotask