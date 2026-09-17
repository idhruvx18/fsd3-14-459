import {mkdir,rm} from "fs/promises";

// await mkdir("uploads/images");

await mkdir("docs/resumes/data",{recursive:true});
// await rm("docs/resumes/data",{recursive:true});
await rm("docs",{recursive:true});