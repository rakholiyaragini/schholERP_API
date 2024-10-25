import mongoose from "mongoose";

const SignInSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.model('signIn', SignInSchema)