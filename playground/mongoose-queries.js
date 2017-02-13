const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/User');

// var id = '58a181480c4ed57410d139ed111';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// //find
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
// //findOne
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//findById
// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

//User.findById
User.findById('589dde142ecf048c2caaf2b4').then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (error) => {
  console.log(error);
});
