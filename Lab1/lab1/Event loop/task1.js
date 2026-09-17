const F1=()=>{
    console.log('F1 start');
    F2();
    console.log('F1 running');
    console.log('F1 end');
};

const F2=()=>{
    console.log('F2 start');
    F3();
    console.log('F2 running');
    console.log('F2 end');

};
const F3=()=>{
    console.log('F3 start');
    console.log('F3 running');
    console.log('F3 end');
};
function main(){
    console.log('main');
    F1();
    F2();
    F3();
    console.log('end main');
};
main();
// js is synchronus and single threaded
// in asynchronus we use event loop to manage the calls stack
// timers: asynchronus calls using timer:set time out,set immediate,process.nexttick,set interval.