const mongoose = require('mongoose');

const BandSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Band name is required!"]
        },
        genre:{
            type:String,
            required:[true, "Genre is required!"],
        },
        description:{
            type:String,
            required:[true, "Please give a small description of your band."]
        },
        influences:{
            type:String,
        },
        image:{
            type:String,
        },
        users:[
            {
                type: mongoose.Schema.Types.ObjectId, ref:'User'
            }
        ],
        discography:[
            {
                type: mongoose.Schema.Types.ObjectId, ref:'Discography'
            }
        ]
    },
    {timestamps:true}
);

const Band = mongoose.model("Band", BandSchema);
// const Discography = mongoose.model("Discography", DiscographySchema);

module.exports = Band;

