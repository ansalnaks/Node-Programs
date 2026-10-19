
export {}
// const EventEmitter = require('events');
import { EventEmitter } from "events";

const event = new EventEmitter();

event.on('greet', (name:string) => {
  console.log(`Hello ${name}, welcome to the Node.js `);
});

event.emit('greet', 'Students');
