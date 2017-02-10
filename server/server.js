var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({email: 'rouetbi.med@gmail.com'});

newUser.save().then((result) => {
  console.log('Saved User', result);
}, (error) => {
  console.log('Unable to save user', error);
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((result) => {
//   console.log('Saved todo',result);
// }, (error) => {
//   console.log('Unable to save todo', error);
// });

// var newTodo = new Todo({
//   text: 'Somthing to do'
// });
//
// newTodo.save().then((result) => {
//   console.log('Saved todo', result);
// }, (error) => {
//   console.log('Unable to save todo', error);
// });
