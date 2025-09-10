const callback = (inputname)=>{
    console.log("Hello Mr." + inputname)
};


const newcallback =(outputname)=>{
    const name = "pahtyut";
    outputname(name)
};

newcallback(callback)