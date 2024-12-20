const { Schema, default: mongoose } = require("mongoose");

const loginSchema = new Schema({
      username:{
            type:String,
            required:[true,"Username is required"],
      },
      password:{
            type:String,
            required:[true,"Password is required"],
      }
});

export const Login  = mongoose.model("Login",loginSchema);