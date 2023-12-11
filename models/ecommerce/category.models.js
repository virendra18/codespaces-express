import mongoose from "mongoose";

const categorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const Category=mongoose.model("Category",categorySchema)

// agar .model("categories",categorySchema) likha hua hai to isme extra s ye sab kuch nahi lagega. mongoose will detect itself and change it into lowercase and plural if not. 