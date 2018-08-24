//const { MongoClient } = require('mongodb'); //const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); //const MongoClient = require('mongodb').MongoClient;

// console.log(ObjectID);
// var obj = new ObjectID();//ObjectID - inbuilt function to prepare unique _id;
// console.log(obj);

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if(err) {
        console.log('unable to connect to mongo db server.');
    } else {

    }
    console.log('Connected to mongo db..');
    const db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text: 'Something i have done',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne(
    //     {
    //         name: 'Kushal Nigam',
    //         age: 27,
    //         location: 'Jbp'
    //     }, (err, result) => {
    //         if(err) {
    //             return console.log('Cant connect to the users collections.');
    //         }

    //         //console.log(JSON.stringify(result.ops, undefined, 2));
    //         console.log(result.ops[0]._id.getTimestamp());
    //     }
    // );
    
    client.close();
});