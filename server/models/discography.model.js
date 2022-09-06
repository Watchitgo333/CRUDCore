const mongoose = require('mongoose');
const DiscographySchema = new mongoose.Schema(
    {
        artist:[{
            type: mongoose.Schema.Types.ObjectId, ref:'Band'
        }],
        title:{
            type:String,
            required:[true, "Title is required."]
        },
        tracks:[{
            name:{
                type:String
            },
            length:{
                type:Number
            }
        }]
    },
    {timestamps:true}
);

const Discography = mongoose.model("Discography", DiscographySchema);

module.exports = Discography;