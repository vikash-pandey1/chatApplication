import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,

    },
    profilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male","female"],
        require:true
    }
},{timestamps:true})

export const User = mongoose.model("user",userModel)