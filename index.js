const express = require('express'); //requiring express
const path = require('path'); //for requiring path(ejs)
const app = express();//for getting all functionalities of express
const port = 8003;//setting port number



app.set('view engine','ejs'); //it is used to add ejs in the file
app.set('views',path.join(__dirname,'views'));//it tells that where we placed our ejs file
app.use(express.urlencoded());// since data received from user is encode we need a parse so this  middleware is needed
app.use(express.static('assets')); //it is also a middleware by the help of this we can add static files inside the express.static we write our static file name


// adding database file
const db = require('./config/mongoose');

// adding schema
const Todoapp = require('./models/todoapp')


// show data
app.get('/',function(req,res){
    Todoapp.find({},function(err,Todoapp){
        if(err){
            console.log('error in fetching data from database');
            return;

        }
    
    return res.render('home',{
        title:'TODO List App',
        todoapp_list:Todoapp
    });
   });
});


// add-data
app.post('/create-todoapp',function(req,res){
    // pushing into db
    Todoapp.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newTodo){
        if(err){
            console.log('error creating a contact');
            return;
        }
        console.log('*******',newTodo);
        return res.redirect('back');
    });
    
});





// delete contact
app.post('/delete-todolist',function(req,res){
    // getting each element form body
   Object.keys(req.body).forEach(function(key){
    Todoapp.findByIdAndDelete(key,function(err){
        if (err) {
            console.log('Error in deleting an item from database', err);
            return;
        }
        console.log('item is deleted');
    });
   });
   return res.redirect('back');
});



// app should listen
app.listen(port, function(err) {
    if (err) {
        console.log(`error in running on server:${err} `);

    }
    console.log(`server is running on port:${port} `);

});