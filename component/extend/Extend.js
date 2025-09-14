const extendclass = require("./Extendsclass");
const Extendout = require("./Extendsout")
const classextend = new extendclass();
const outextend = new Extendout()
     
classextend.on('other',(one,two)=>{
    console.log(`this is a number :${one} , this is a number : ${two}`);
    outextend.Serverout(one)
})
classextend.other("one","two");

classextend.displaynumber()

