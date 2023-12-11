import mongoose from "mongoose";

const todoSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default: false
    },
    createdBy:{
        /**
        created by ka relation hona chahiye user ke saath
        so ab humlogo ko user model ke saath relation chahiye 
        for this keep in mind these 2 things
        1. special type hai ye and dursa reference
         type: mongoose.Schema.Types.ObjectId--> asie hi likhna hai
        iske next line mai reference likhna compulsory hai
        ref:"User", User wo hai jo mongoose.model ke andar ke 1st field mai likha hota 
        mongoose.model(`User`,userSchema) hai to User lenge
        */
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"subTodo"
        }
    ]//Array of Sub-Todos

},{timestamps:true})

export const Todo= mongoose.model("Todo",todoSchema)
