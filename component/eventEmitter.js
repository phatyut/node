const eventEmitter = require("node:events");
const { EventEmitter } = require("node:stream");
const emitter = new EventEmitter();
emitter.on("testingevents",(one,two)=>{
    console.log("this is a first testingevents Emitter"+one+","+two);
});
emitter.on("testingevents",(one)=>{
    if(one === "numberone"){
        console.log("one have numberone that's right;")
    }
});
console.log("event running before system")
emitter.emit("testingevents","numberone","numbertwo")
