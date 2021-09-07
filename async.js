const fs=require("fs");
console.log("start")
const first=fs.readFile("./contents/cons/firsts.txt","utf8",(err,result)=>{
    if (err){
        console.log(err);
        return
    }const first=result;
    const second=fs.readFile("./contents/cons/secomds.txt","utf8",(err,result)=>{
        if (err){
            console.log(err);
            return
        }const second=result;
        const third=fs.writeFile("./contents/resul-async.txt",`${first},${second}`,{flag:"a"},(err,result)=>{
            if (err){
                console.log(err);
                return
            }
            console.log("task is completed")
        })
    })
})
console.log("starting the next taskf")