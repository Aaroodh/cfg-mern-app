import mongoose from "mongoose";
import validator from "validator";
import jwt from 'jsonwebtoken'
const socialSchema = new mongoose.Schema({
    wname: {
        type: String,

        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    wage: {
        type: String,

        trim: true,
    },
    wgender: {
        type: String,


        default: 'female',
    },
    wtel: {
        type: String,
        trim: true,
    },
    duration: {
        type: String,
        trim: true,
    },
    wcenter: {
        type: String,

    },
    institute: {
        type: String,

        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    name: {
        type: String,

        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    age: {
        type: String,

        trim: true,
    },
    center: {
        type: String,


        default: 'Khar',
    },
    gender: {
        type: String,
        default: 'female',
    },
    payment: {
        type: String,
        default: 'unpaid',
    },
    tel: {
        type: String,
        trim: true,
    },

    courseEnrolled: {
        type: String,

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



    image: {
        type: String,
    },


    cname: {
        type: String,

        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    designation: {
        type: String,
        trim: true,
    },
    salary: {
        type: String,
        trim: true,
    },


},


)
socialSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}
export default mongoose.model("Social", socialSchema)