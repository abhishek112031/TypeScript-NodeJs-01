"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
// const router=express.Router();
// or
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body; //alias
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Added new todo", newTodo: newTodo, todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const tid = params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        };
        return res.status(200).json({ message: "updated todos", todos: todos });
    }
    res.status(404).json({ message: "could not find todo Id!" });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const afterDeletion = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({ message: "deleted todo", todos: afterDeletion });
});
//exporting:
exports.default = router;
