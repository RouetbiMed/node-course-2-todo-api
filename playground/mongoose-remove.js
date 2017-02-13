const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/User');

//Todo.remove({})
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()
// Todo.findOneAndRemove({_id: '58a1bb2d37e5aacc89bd6003'}).then((todo) => {
//   console.log(todo);
// });

//Todo.findByIdAndRemove()
Todo.findByIdAndRemove('58a1bb2d37e5aacc89bd6003').then((todo) => {
  console.log(todo);
});
