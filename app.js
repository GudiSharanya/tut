// const http=require("http");
// const server=http.createServer((req,res)=>{
// res._write("welcome to our homepage")
// res.end()
// })
// server.listen(5000)
const _=require("lodash")
const items=[1,[2,3],[4,5]]
const new_items=_.flattenDeep(items)
console.log(new_items)