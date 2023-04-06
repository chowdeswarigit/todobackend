const express = require('express') 

const addTodo = require ('../controller/todo')

const getAlltodos =  require('../controller/getTodo')
const route = express.Router()

route.post('/todo',addTodo)

route.get('/gettodos',getAlltodos)

module.exports = route