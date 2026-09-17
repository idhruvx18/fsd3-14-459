import {writeFile ,appendFile} from "fs/promises";
import {readFile} from "fs/promises";

// await writeFile("stud.txt","Ravikant Singh\nRoll Number:82");
//console.log("File written");

// const data = await readFile("stud.txt","utf-8");
// console.log(`file contents :${data}`);

const addContent = async (fname,content)=>{
    await writeFile(fname,content);
    console.log("file written");
};
const readContent= async (fname)=>{
    const f_name= await readFile(fname,"utf-8");
    return f_name;
};
const appendData =async (fname,content)=>{
    await appendFile(fname,"\n"+content);
    console.log("data appended");

};
await addContent("notes.txt","FS IS EASY IN JS");
console.log("content:\n", await readContent("notes.txt"));
await appendData("notes.txt","it can add update and read data");
console.log("updated content:\n", await readContent("notes.txt"));
