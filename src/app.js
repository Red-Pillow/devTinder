const express = require('express');
const app = express(); //call the express to use it handy instance of an expressjs application


// app.use('/test',(req,res)=>{
//   res.send('hello from the server') // shows in the port 3000
// })

    

// app.use('/hello',(req,res)=>{
//     res.send('hello hello hello!!!')
// })

// app.use('/',(req,res)=>{
//   res.send('hello from the dashboard')
// })

app.get("/user/:userId/:name/:password",(req,res)=>{
  console.log(req.params)
  res.send({firstname:"chetan", lastname: "sahu"})
})

app.post("/user",(req,res)=>{
  res.send("data is successfully saved in the DB")
})

app.listen(3000,()=>{
console.log("server is succersssfully listening in the port no 3000")
})

