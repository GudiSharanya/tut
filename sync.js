const {readFileSync,writeFileSync}=require("fs")
console.log("start")
const first=readFileSync("./contents/cons/firsts.txt","utf8");
const second=readFileSync("./contents/cons/secomds.txt","utf8");
const third=writeFileSync("./contents/cons/res.txt",`${first},${second}`)
console.log("completed the task")
console.log("starting the next task")