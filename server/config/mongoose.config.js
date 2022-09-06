const mongoose = require('mongoose');
const MONGOURI = 'mongodb://localhost/crudcore_db';

mongoose.connect(MONGOURI)
    .then(()=>{
        console.log("Connected to db!")
    })
    .catch((err)=>{
        console.log("Error connecting to db", err.message)
    })