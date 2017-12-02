const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove ({}).then((result) => {
//   console.log(result)
// });

//Todo.findOneAndRemove({})
//Todo.findByIdAndRemove({})

Todo.findByIdAndRemove('5a23106c9ccf187c7be3fcaf').then((todo) => {
  console.log(todo);
});
