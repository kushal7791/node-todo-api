var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoSoft",{ useNewUrlParser: true });

var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false//if not found make it false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

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

var User = mongoose.model(("Users"), {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: "abc@gmail.com"
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log("Some error in saving", err);
});