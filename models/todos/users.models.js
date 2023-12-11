// How does mongoose create and export model

//S1: import mongoose
import mongoose from "mongoose";

//S2: Mongoose help in creating schema
// schema is a method which take object
const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase: true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type: String,
            required:[true]
        }
    },{timestamps:true}
)


//S3: Schema ko export kiya jaata hai
// model() method takes 2 parameter
// kya model banau aur kiske basis pe banau?
export const User= mongoose.model("User",userSchema)

// User database mai jaake users ban jaata hai
// mongodb mai model convert ho jaat hai plural mai aur lowercase ho jaate hai

