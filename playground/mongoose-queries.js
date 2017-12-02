const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a22e5e5938a0eb81c556789';
 var id = '5a21ced41325c81e044db736'

 User.findById(id)
  .then((user) =>{
    if(!user){
      return console.log('User not found!', user)
    }
    console.log('User found', user)
  }).catch((e) => {
    console.log(e)
  })  ;


// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// };

// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => {
//   console.log(e);
// });
