const mongoose = require('mongoose') 

const TodoSchema   = mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


const TodoItem = mongoose.model('todo',TodoSchema) 

module.exports = TodoItem