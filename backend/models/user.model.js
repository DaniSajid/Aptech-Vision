import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cPassword:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false 
    }
},{timestamps:true});

export const User = mongoose.model("User",userSchema);