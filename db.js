//database connection
//first install npm i mongoose

const mongoose = require('mongoose');
require('dotenv').config();
 
//Define the MongoDB connection URL

// const mongoURL = process.env.MONGODB_URL_LOCAL;


const mongoURL=process.env.MONGODB_URL;

//set up MongoDB Connection

mongoose.connect(mongoURL, {

    //Required Parameters
    useNewUrlParser:true,
    useUnifiedTopology: true
})

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection.

const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected',() => {
    console.log('COnnected to MongoDB server');

});

db.on('error',(err) => {
    console.error('MongoDB Connection error:',err);
});

db.on('disconnected', () => {
    console.log('MongoDB Connection Disconnected:');
});

//Export the database Connection

module.exports = db;


