const Todo  = require('../models/todo')

const getAlltodos = async(request,response) =>{

    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })

        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }

}
module.exports = getAlltodos