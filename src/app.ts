import express from "express";
import bodyParser from "body-parser";

//this import syntax will always import from default export file in ts,u can name it what ever you want

import todosRoute from "./routes/todos";   


const app=express();


app.use(bodyParser.json())

app.use(todosRoute)


app.listen(3000);