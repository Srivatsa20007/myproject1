import mongoose from "mongoose";
const signupschema=mongoose.Schema({
    "name":String,
    "email":String,
    "password":String,
    "isEmployee":Boolean
});
export const signup=mongoose.model('signup',signupschema);
