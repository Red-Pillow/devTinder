const express = require('express');
const app = express(); //call the express to use it handy instance of an expressjs application


app.use("/user", (req,res,next)=>{
  console.log("handling route user 1")
  res.send("Response 1");
  next()
},(req,res)=>{
  console.log("handling route user 2")
  res.send("Response 2");

} );


app.listen(3000,()=>{
console.log("server is succersssfully listening in the port no 3000")
})

