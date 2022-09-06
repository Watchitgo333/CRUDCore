const Band = require('../models/band.model');

const createBand = (req, res) => {
    console.log("body--->", req.body)
    Band.create(req.body)
        .then((newBand)=>{
            res.json(newBand);
        })
        .catch((err)=>{
            console.log("Error in createBand===>", err);
            res.status(400).json({message:"ERROR--->", error: err.errors});
        })
}

const getBands = (req, res) => {
    Band.find({})
        .then((bands)=>{
            console.log(bands);
            res.json(bands);
        })
        .catch((err)=>{
            console.log("error in getBands--->", err);
            res.status(400).json(err)
        })
}

const getBandById = (req, res) =>{
    Band.findById(req.params.id)
        .then((band)=>{
            console.log(band);
            res.json(band);
        })
        .catch((err)=>{
            console.log("Error in getBandById--->", err);
            res.status(400);
        })
}

const updateBandById = (req, res) =>{
    Band.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})
        .then((updateBand)=>{
            console.log(updateBand)
            res.json(updateBand)
        })
        .catch((err)=>{
            console.log("Error in updateBandById--->", err);
            res.status(400).json({message:"ERROR--->", error:err.errors});
        })
}

const deleteBandById = (req,res) =>{
    Band.findByIdAndDelete(req.params.id)
        .then((deleteBand)=>{
            console.log(deleteBand)
            res.json(deleteBand)
        })
        .catch((err)=>{
            console.log("Error in deleteBandById--->",err)
            res.status(400).json(err);
        })
}

module.exports = {
    createBand,
    getBands,
    getBandById,
    updateBandById,
    deleteBandById
}