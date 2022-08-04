const mongoose = require('mongoose');   //need to require mongoose for use in project 
mongoose.connect('mongodb://localhost/todo_list_db');  //for connecting mongoose to database
// acquire the connection
const db = mongoose.connection;
// error handling
db.on('error',console.error.bind(console,'error connecting to db'));
// check up and running then print the message
db.once('open',function(){
    console.log('successfully connected to the database');
});