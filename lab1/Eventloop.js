// eventloop.js
import {writeFile} from 'fs/promises';
const f1 = () => {
    console.log("F1");
};

const f2 = () => {
    console.log("F2");
};

const f3 = () => {
    console.log("F3");
};
const writeData=async()=>{
    await writeFile("note.next","I am fs module");
    console.log("file written");

}

const main = () => {
    console.log("main");

    writeData();
  //  f1();
    setTimeout(f2,0);
   // setInterval(f2,1000);
    setImmediate(f3);
    process.nextTick(f1);
    console.log("end");
    new Promise((resolve,reject)=>{
        console.log("i am promise ");
    });
    new Promise((resolve,reject)=>{
        console.log("i am promise 2 ");
    });
};

main();
 