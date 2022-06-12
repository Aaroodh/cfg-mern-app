import mongoose from "mongoose";
import validator from "validator";
import jwt from 'jsonwebtoken'
const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'plz provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    age: {
        type: String,
        //required:[true,'plz provide age'],
        trim: true,
    },
    tel: {
        type: String,
        //required:[true,'plz provide telephone numbers'],
        trim: true,
    },
    gender: {
        type: String,
        //required:[true,'plz provide gender'],
        default: 'female',
    },
    courseDeployed: {
        type: String,
        // required:[true,'plz provide course'],
    },
    center: {
        type: String,
        // required:[true,'plz provide centerName'],
        default: 'Khar',
    },
    email: {
        type: String,
        //required:[true,'plz provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email'
        },

        unique: true,

    },

    password: {
        type: String,
        // required:[true,'plz provide password'],
        minlength: 6,
    },

    image: {
        type: String,
    },

},


)
staffSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}
export default mongoose.model("Staff", staffSchema)
    // users