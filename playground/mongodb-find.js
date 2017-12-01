//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a218b0c07a2506131ffd423')})
  //   .toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find()
  //   .count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Tony'})
    .count().then((count) => {
      console.log(`Names found ${count}`);
    }, (err) => {
      console.log('Unable to find results', err);
    })

  // db.collection('Users').find({name: 'Saul'}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // })

  //db.close();
});
