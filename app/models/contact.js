import mongoose, {Schema} from "mongoose";

const contactSchema = new Schema({
    name : {
        type : String,
        required : [true],
        // trim : true,
        minLength : [2,"Name must be larger than 2 characters"],
        maxLenth : [50,"Name must be lesser than 50 characters"]

    },
    email : {
        type : String,
        required : [true, 'Email is required'],
        match : [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invaild email address"],
    },
    message : {
        type : String,
        required : [true, "Message is required"],
    },
    date : {
        type : Date,
        default : Date.now
    }
})

const Contact = mongoose.connection.useDb('test');
const user = Contact.model("Contact",contactSchema)

export default user;