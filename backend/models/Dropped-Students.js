import mongoose from "mongoose";
import validator from "validator";

import jwt from 'jsonwebtoken'
const DroppedStudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'plz provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    age: {
        type: String,
        trim: true,
    },
    reason: {
        type: String,
        trim: true,
    },
    tel: {
        type: String,

        trim: true,
    },
    gender: {
        type: String,
        default: 'female',
    },

    center: {
        type: String,

        default: 'Khar',
    },
    email: {
        type: String,
        required: [true, 'plz provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email'
        },

        unique: true,

    },

    password: {
        type: String,

        minlength: 6,
    },


},


)
DroppedStudentSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}
export default mongoose.model("DroppedStudents", DroppedStudentSchema)