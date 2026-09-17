import fs from "fs/promises";
const writedata=async ()=>{
    try{
        console.log("about to erite...");
        await fs.writeFile("stud.txt","name:dhruv");
        console.log("file written");
    }catch(error){
        console.log(error);
    }
};  //highest priority
const F1=()=>{
    console.log('F1');
};
const F2=()=>{
    console.log('F2');
};
const F3=()=>{
    console.log('F3');
};
const main=()=>{
    console.log('main');
    // setTimeout(F1,5000);
    // setInterval(F1,5000);  
    setTimeout(F1,0);
    setImmediate(F2);
    process.nextTick(F3);
     writedata();
    console.log('end');
};

main();

// Promise