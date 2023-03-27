// import express from 'express';
// const router=express.Router();
// or
import { Router } from 'express';
import { Todo } from '../models/todos';

let todos: Todo[] = [];
const router = Router();

//alises 
type reqBody={text:string};
type reqParams={todoId:string};


router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos })

});
router.post('/todo', (req, res, next) => {
    const body=req.body as reqBody;//alias
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);

    res.status(201).json({ message: "Added new todo", newTodo: newTodo, todos: todos });

});

router.put('/todo/:todoId', (req, res, next) => {
    const params=req.params as reqParams;
    const body=req.body as reqBody;
    const tid = params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);

    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        };
        return res.status(200).json({ message: "updated todos", todos: todos })

    }
    res.status(404).json({ message: "could not find todo Id!" })
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params=req.params as reqParams;
    const afterDeletion = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({ message: "deleted todo", todos: afterDeletion })

})

//exporting:

export default router;