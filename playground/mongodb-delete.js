const { MongoClient, ObjectID } = require('mongodb'); //const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {//connecting to the given mongodb installation path
    if(err) {
        console.log("Some error occured to connect to mongodb.");
    }
    
    console.log('Connected to mongo db.');
    
    const db = client.db("TodoApp");//selecting db name from mongo connection
    
    //deleteMany
    // db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
    //     console.log(result);
    // });
    
    //deleteOne
    // db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {
    //     console.log(result);
    // });
    
    //find and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //find and delete with _id
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5b7e47aa5b2ad336f0e5e0e0")
    }).then((result) => {
        console.log(result, undefined, 5);
    });
    
    client.close();
});