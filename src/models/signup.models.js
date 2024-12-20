const { Schema, default: mongoose } = require("mongoose");

const signUpSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,  
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    confirmPassword:{
        type:String,
        required:[true,"Please confirm your password"],
    }, 
    photo:{
        type:String,
    }

});

export const SignUp = mongoose.model("SignUp",signUpSchema);