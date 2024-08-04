import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength: [3, "First Name must be at least 3 char"]
    },
    lastName:{
        type:String,
        required:true,
        minLength: [3, "First Name must be at least 3 char"]
    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength: [10, "Phone No must be exact 10 digits"],
        maxLength: [10, "Phone No must be exact 10 digits"]
    },
    message:{
        type: String,
        required: true,
        minLength: [10, "Message must be at least 10 char"]
    },
});

export const Message = mongoose.model("Message", messageSchema);