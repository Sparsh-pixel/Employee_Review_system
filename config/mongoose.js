const mongoose = require('mongoose');

const uri = 'mongodb+srv://sparsh:employee@cluster0.5s6ch66.mongodb.net/';

mongoose.connect(uri).then(()=>{
     console.log('Connected to Database: MongoDB Atlas');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

module.exports = db;