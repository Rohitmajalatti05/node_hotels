// const notes = require('./[notes.js');
// console.log('server file is available');

// var age = notes.age;
// console.log(age);
// var result = notes.addnumber(age,10);
// console.log(result)


// const express = require("express");
// const app = express();

// app.get('/',function (req,res){
//     res.send('Welcome to my hotel....How can i help you?')
// })

// app.get('/chicken',function(req,res){
//     res.send('sure sir! i would love to serve chicken')
// })

// app.get('/idli',function(req,res){
//     var customized_idli = {
//         name:"Rava Idli",
//         size:"10cm diameter",
//         is_sambhar:true,
//         is_chutney:false
//     }
//     res.send(customized_idli)
// })
// app.listen(3000, () =>{
//     console.log("listening on port 3000");
// 

//---------------------------------------------------****------------------------------------------------------------------


const express = require("express")  //first install npm i express
const app = express();
const db = require('./db'); //import database connection from db.js



const bodyParser = require('body-parser'); //first install npm i body-parserused,it is used to send the data and extract the body http request 
app.use(bodyParser.json()); // the body converts the json data into js object and then saves the data into bodyParser.json


//-------------------------------------------------------------------
// app.get('/',function(req,res){
//     res.send('Welcome to my Hotel!')
// })

// app.get('/Dosa', function(req,res){
//     res.send("sure sir!..we would love to serve Dosa")
// })

// app.get('/idli',function(req,res){
//     var customized_idli = {
//         name:"Rava Idli",
//         size:"10cm diameter",
//         is_chutney:true,
//         is_sambhar:false
//     }
//     res.send(customized_idli)
// })

// app.post('/items',function(req,res){
//     res.send('data is saved!')
// })
//---------------------------------------------------------------------

app.get('/',function(req,res) {
    res.send('Welcome to my Hotel... How i can help you?, we have list of menus')
})


//Import the router files
const personRouter = require('./routes/personRoutes');
const menuRouter = require('./routes/menuRoutes');

//use the routers
app.use('/person',personRouter );
app.use('/menu',menuRouter);

app.listen(3000,()=>{
    console.log('listening on port 3000');
})


