//library imports
var express = require('express');
var bodyParser = require('body-parser');

//local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// var newTodo = new Todo({
//     text: "Cook Dinner"
// });

// newTodo.save().then((doc) => {
//     console.log("Saved todo.", doc);
// }, (err) => {
//     console.log("Unable to save todo.", err);
// });

// var newTodo3 = new Todo({
//     //"",gives an error as required is set to true and text not define
//     //text: "",gives an error as minlength set to 1
//     //text: "    ",gives an error as minlength set to 1 and trim: true removes the whitspace and make it blank
//     text: "    A lot of things to do     "//,
//     //text: true,//TypeCast: boolean true in text property will convert into "true" string as define in model.
//     //completed: true,
//     //completedAt: 2
// });

// newTodo3.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log("Unable to save todo.", err);
// });


// var newUser = new User({
//     email: "abc@gmail.com"
// });

// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log("Some error in saving", err);
// });

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);//this will take the data from the body and display in the cmd.
    // var todo = new Todo({
    //     text: req.body.text//this is the text property of the body that we'd enter on postman
    // });
    var todo = new Todo({
        text: req.body.text,//this is the text property of the body that we'd enter on postman
        completed: req.body.completed,//this is the completed property of the body that we'd enter on postman
        completedAt: req.body.completedAt//this is the completedAt property of the body that we'd enter on postman
    });

    todo.save().then((doc) => {
        res.status(200).send(`${doc}`);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000.');
});