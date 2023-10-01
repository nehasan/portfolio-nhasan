import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    admin: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;