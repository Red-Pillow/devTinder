const express = require('express');
const app = express(); //call the express to use it handy instance of an expressjs application

app.use('/',(req,res)=>{
    res.send('hello from the dashboard')
})
app.use('/test',(req,res)=>{
  res.send('hello from the server') // shows in the port 3000
})

    

app.use('/hello',(req,res)=>{
    res.send('hello hello hello!!!')
})
app.listen(3000,()=>{
console.log("server is succersssfully listening in the port no 3000")
})

