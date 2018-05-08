const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '5af1ad77b9832e316fa3ce6c';
if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

/* Todo.find({
    _id : id
}).then((todos)=>{
    console.log('Todos', todos)
});

Todo.findOne({
    _id : id
}).then((todo)=>{
    console.log('Todo', todo)
});
 */
Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('ID not found!')
    }
    console.log('Todo by ID', todo)
}).catch((err)=>{
    console.log(err);
});