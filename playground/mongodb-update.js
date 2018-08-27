const { MongoClient, ObjectID } = require('mongodb'); //const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {//connecting to the given mongodb installation path
    if(err) {
        console.log("Some error occured to connect to mongodb.");
    }
    
    console.log('Connected to mongo db.');
    
    const db = client.db("TodoApp");//selecting db name from mongo connection
    
    //find and delete with _id
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b83a822a1a1a53112c09f7c")
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5b7d5a24b2eb5b37dcc53fd1")
    }, {
        $set: {
            name: "Kushal The Nigam"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    client.close();
});