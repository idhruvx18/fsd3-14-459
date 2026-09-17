import {EventEmitter} from 'node:events';
const sayhi=(name)=>{
    console.log(`${name} is logged in`);
};
const task=new EventEmitter();
task.once('greet',()=>{
    console.log('system started');
});
task.on('greet',sayhi);
task.on('greet',(name)=>{
    console.log(`${name} starts working`);
});
task.off('greet',sayhi);
task.on('greet',(name)=>{
    console.log(`${name} stops working`);
});
task.emit('greet','rahul singh');
task.emit('greet','anujsingh');

task.emit('greet','dhruv');
task.once('exit',()=>{
    console.log("system stop");
});
task.emit('exit');
console.log(task.listenerCount('greet'));
task.removeAllListeners('greet');
console.log(task.listenerCount('greet'));
