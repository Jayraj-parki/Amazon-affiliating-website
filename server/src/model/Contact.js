var validator = require('validator');
const mongoose = require('mongoose')
const ContactSchema = new mongoose.Schema(
    {


        date: {
            type: String,
            trim: true,
            default: new Date(),
            required: true,
        },
        message: {
            type: String,
            trim: true,
            required: true,
              
        },
        email: {
            type: String,
            trim: true,
            required: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Email is inValid")
                }
            }                 
            
        },
        name: {
            type: String,
            trim: true,
            required: true,
                                
        }

    }
)


const Contact = new mongoose.model('Contact', ContactSchema)

module.exports = Contact