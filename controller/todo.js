 const Todo  = require('../models/todo')
 


//  try{
//     //        const {id}  = req.user 
//     //        const completionDate = new Date(req.body.date)
//     //        const task = new Task({...req.body,id:userId, date:completionDate}) 
//     //        const saveTask  = await task.save() 
//     //        return res.status(201).json({task:saveTask})
//  }    
 const  addTodo = async (request, response) => {
    try {

        const newTodo = await Todo.create({
            data: request.body.data,
         
            createdAt: Date.now()
        })

        await newTodo.save();
        console.log(newTodo)

        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}



module.exports = addTodo