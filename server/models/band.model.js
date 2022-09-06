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
        discography:[
            {
                type: mongoose.Schema.Types.ObjectId, ref:'Discography'
            }
        ]
    },
    {timestamps:true}
);

// const DiscographySchema = new mongoose.Schema(
//     {
//         artist:[{
//             type: mongoose.Schema.Types.ObjectId, ref:'Band'
//         }],
//         title:{
//             type:String,
//             required:[true, "Title is required."]
//         },
//         tracks:[{
//             name:{
//                 type:String
//             },
//             length:{
//                 type:Number
//             }
//         }]
//     },
//     {timestamps:true}
// );
const Band = mongoose.model("Band", BandSchema);
// const Discography = mongoose.model("Discography", DiscographySchema);

module.exports = Band;

