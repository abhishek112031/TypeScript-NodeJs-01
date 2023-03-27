"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
// const router=express.Router();
// or
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: "hi i am abhishek Adhikary"
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
//exporting:
exports.default = router;
