// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'master', age: 28};
// //object distructuring
// var {name} = user;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Somthing to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Master',
  //   age: 28,
  //   location: 'monastir'
  // }, (err, result) => {
  //   if(err){
  //       return console.log('Unable to insert user', err);
  //     }
  //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});