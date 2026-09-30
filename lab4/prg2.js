import express from 'express'
import path from 'path'
import { fileURLToPath } from "node:url";

const app = express();
// request goes here
const filename =fileURLToPath(import.meta.url);
const dirname = path.dirname(filename)

app.get("/",(req,res)=>{
    res.sendFile(path.join(dirname,"public","index.html"));
});

app.use((req,res)=>{
    res.status(404).send("<h1>Page not found</h1>");
});



// always listen at last
app.listen(3333,()=>console.log("prg2 is running..."));