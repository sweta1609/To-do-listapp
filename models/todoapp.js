// require mongoose
const mongoose =require('mongoose');
// creating schema
const todoSchema =new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
// need to tell name of collection which will use this schema
const Todoapp = mongoose.model('Todoapp',todoSchema);
// exporting todoapp
module.exports =Todoapp;
