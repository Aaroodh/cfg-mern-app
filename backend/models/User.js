import mongoose from "mongoose";
import validator from "validator";
import jwt from 'jsonwebtoken'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        //required: [true, 'plz provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    age: {
        type: String,
        //required: [true, 'plz provide age'],
        trim: true,
    },
    tel: {
        type: String,
        trim: true,
    },
    payment: {
        type: String,
        trim: true,
    },
    feepaid: {
        type: String,
        trim: true,
    },
    totalfee: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        //required: [true, 'plz provide gender'],
        default: 'female',
    },
    courseEnrolled: {
        type: String,
        //required: [true, 'plz provide course'],
    },
    center: {
        type: String,

        //required: [true, 'plz provide centerName'],
        default: 'Khar',
    },
    scholarship: {
        type: String,

        //required: [true, 'plz provide centerName'],
        default: 'notgranted',
    },
    cname: {
        type: String,

        //required: [true, 'plz provide centerName'],
        default: '',
    },
    email: {
        type: String,
        //required: [true, 'plz provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email'
        },

        unique: true,

    },

    password: {
        type: String,
        //required: [true, 'plz provide password'],
        minlength: 6,
    },

    image: {
        type: String,
    },

    location: {
        type: String,
        //required: [true, 'plz provide company Location'],
        trim: true,
    },
    designation: {
        type: String,
        //required: [true, 'plz provide company Designation'],
        trim: true,
    },
    salary: {
        type: String,
        //required: [true, 'plz provide company Designation'],
        trim: true,
    },


},


)

userSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

export default mongoose.model("User", userSchema)
    // users