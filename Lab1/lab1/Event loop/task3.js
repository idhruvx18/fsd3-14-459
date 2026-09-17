console.log("1:start");
setTimeout(()=>console.log("2:setTimeout"),0);
setImmediate(()=>console.log("3:setImmediate"));
process.nextTick(()=>console.log("4:process.nextTick"));
console.log("end");
// in some processors immediate and timeout are unpredictable