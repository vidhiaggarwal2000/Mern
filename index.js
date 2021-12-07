var express = require('express')
var app=express()
var path=require('path')

/*app.get('/',function(req,res){
     res.send("Hello from server")
})*/

app.get('/',function(req,res){
    res.sendFile('register.html',{root:path.join(__dirname,'./Assests')});
})
app.post('/',function(req,res){
    res.send("from api")
})
app.listen(3005,function(error){
        if(error)
        console.log(error)
        console.log("server is running at 3005")
    })