import {createReadStream } from "fs";
import http from 'http';

const server = http.createServer((req,res)=>{
if(req.url ==='/'){
    res.setHeader("content-type","text/html");
    res.write(`
        <a href='/BOTTLE'>bottle</a>
         
        <a href='/pot'>pot</a>
    `);
    res.end();
    
}

 else if(req.url ==="/bottle"){
    res.setHeader("centent-type","text/html");
const stream = createReadStream("BOTTLE.HTML",{encoding:'utf-8'});
stream.pipe(res);
}else if(req.url == "/pot"){
    res.setHeader("content-type","text/html");
const stream = createReadStream("pot.html",{encoding:'utf-8'});
stream.pipe(res);
}
else{
    res.statusCode = 404;
    res.end();
}

});

server.listen(4444,()=> console.log("prg3 is running"));