var events = require('events');
var eventEmitter = new events.EventEmitter();

var eventHandler = () => { console.log('I hear a scream!') };
eventEmitter.on('scream', eventHandler);

eventEmitter.emit('scream');
