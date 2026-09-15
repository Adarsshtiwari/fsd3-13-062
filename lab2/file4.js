import{stat} from  "fs/promises";

const stats=await stat("readme.md");
comsole.log("is file ")