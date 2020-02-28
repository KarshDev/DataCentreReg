### MongoDb Server Installation and Startup

### Install mongo.exe
### Follow complete installation or custom(advance experience required)
### Upon complete installation, setup environment varible to make mongo global... 
### i.e copy .../bin path to environment variable
### Create a folder "public" and move all necessary files (.html, .css, .js) as your working folder. 

## Open command prompt and type mongo to run
## Type "db" to check existing databases
## Type "use 'database name' to create new database.

## create server javascript file in the root folder
## create a package.json file (npm init)
## Once completed, install express (npm i express)
## Once completed, install mongoose (npm i mongoose)
## Once completed, install body-parser (npm i body-parser)
## Once completed, install nodemon if not previously installed (npm i -g nodemon)

### In the previously created server.js file, import all necessary functions and path {
        const express = require('express');
        const app = express();

        const path = require('path');
        
        const userModel = require('./models/user');
        const bodyParser = require("body-parser");

        const PORT = process.env.PORT || 3000;

        const mongoose = require('mongoose');
        const dbURI = "mongodb://localhost:27017/databaseName";
        
        app.use(express.static('public'));
        

        // app.get('/home',(req,res)=>{
        //     res.sendFile(path.resolve(__dirname,'public','index.html'));
        // })
    }

### connect to database using mongoose 
        mongoose.connect(dbURI,{

        }).then(()=>{
            console.log("database connection successfull")
        }).catch(err=>{
            console.log(err);
        })
        
###     // To get decoded path in JSON
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(bodyParser.json());

### Then proceed with database manipulation (POST, GET)


###     // Put at the end of sever js file to listen to port in order to run server...
        app.listen(PORT,()=>{
            console.log('app running on port ',PORT);
        })