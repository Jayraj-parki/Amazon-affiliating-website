const mongoose = require('mongoose')
const RandomProductSchema = new mongoose.Schema(
    {
        link: {
            type: String,
            trim: true,
            required: true,
        }
    }
)


const RandomProduct = new mongoose.model('RandomProduct', RandomProductSchema)

module.exports = RandomProduct