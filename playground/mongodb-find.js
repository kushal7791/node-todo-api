const { MongoClient, ObjectID } = require('mongodb'); //const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";

//MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {//connecting to the given mongodb installation path
MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {//connecting to the given mongodb installation path
    if(err) {
        console.log("Some error occured to connect to mongodb.");
    }
    console.log('Connected to mongo db.');

     const db = client.db("TodoApp");//selecting db name from mongo connection
    
     // //db.collection('Todos').find({completed:true}).toArray().then((docs) => {
    // db.collection('Todos').find({
    //     //_id: '5b7d58614ce734329857e601'
    //     _id: new ObjectID('5b7d58614ce734329857e601')//as _id is not just a saved string it is saved as an object in mongodb.
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to connect to the Todos.", err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count : ${count}`);
    // }, (err) => {
    //     console.log("Unable to connect to the Todos.", err);
    // });
    
    db.collection('Users').find({
        name: "Deepak Sh"
    }).toArray().then((docs) => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to connect to the Todos.", err);
    });
    
    client.close();
});