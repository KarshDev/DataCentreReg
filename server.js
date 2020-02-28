const express = require("express");
const app = express();
const path = require("path");

app.use (express.static('public'));

const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const userModel = require('./models/user');
const bodyParser = require('body-parser');
const dbURI = 'mongodb://127.0.0.1:27017/citizenDB';

mongoose.connect(dbURI,{

}).then(()=>{
    console.log("database connection successfull")
}).catch(err=>{
    console.log(err);
})

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log(req.query.name);
    res.send('hello world');
});

//Add User Api
app.post('/newuser', (req,res)=>{
    const {name, email, address, description, date} = req.body

    console.log(req.body);
    const newuser =new userModel({
        name: name,
        email: email,
        address: address,
        description: description,
        date: date
    });

    newuser.save()
      .then(response=>{
          console.log("Field added successfully");
          res.status(200).json({success:true,message:"User added successfully!"})
      }).catch(err=>{
          console.log(err);
          res.status(400).json({error:true, message:"an error occured", error:err})
      })


});

// Retrieve Users Api
app.get('/getusers',(req,res)=>{
    userModel.find()
    .then(response=>{
        console.log(response)
          res.status(200).json({message:"Data retrieved successfully",data:response})
    }).catch(err=>{
        console.log(err);
        res.status(400).json({error:true,message:"Unable to get users"});
    })
})


// Resolve Home page
app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','index.html'));
})

app.listen(port,()=>{
    console.log ('Listening to port', port);
});