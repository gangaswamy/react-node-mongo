require('./models/db');
const express = require('express');
const bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
var http = require('http').Server(app);
app.use(cors({credentials: false, origin:'*'}));
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

http.listen('5000','127.0.0.1', () => {});

const tasksController = require('./controllers/tasksController');
app.use('/tasks', tasksController);