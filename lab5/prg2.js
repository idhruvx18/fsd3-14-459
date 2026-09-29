import express from 'express';
import path from 'path';
const port =3000;
const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname,"pages")));
app.listen(port,()=>{
    console.log('listening');
});