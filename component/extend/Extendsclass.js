 const eventEmitter = require("node:events")
class extendme extends eventEmitter{
    constructor(){
        super();
        this.number = 0;
    };
    other(one,two){
        this.number++;
        this.emit("other",one,two)
    };
    displaynumber(){
        console.log("this is a counter number:"+ this.number);
    }
};
module.exports = extendme;