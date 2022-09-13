const Discography = require('../models/discography.model');
// const Band = require('../models/band.model');

const addBandToDiscog = (req, res) => {
    console.log("body--->", req.body)
    Discography.create(req.body)
        .then((newAlbum)=>{
            res.json(newAlbum);
            console.log(newAlbum._id)
        })
        .catch((err)=>{
            console.log("Error in addToBandDiscog===>", err);
            res.status(400).json({message:"ERROR--->", error: err.errors});
        })
}

const getAllAlbumsInDb = (req, res) => {
    Discography.find({}).populate("artist")
        .then((allAlbums)=>{
            console.log(allAlbums);
            res.json(allAlbums);
        })
        .catch((err)=>{
            console.log("error in getAllAlbumsInDb--->", err);
            res.status(400).json(err)
        })
}

const getAlbumById = (req, res) =>{
    Discography.findById(req.params.id)
        .then((album)=>{
            console.log(album);
            res.json(album);
        })
        .catch((err)=>{
            console.log("Error in getAlbumById--->", err);
            res.status(400);
        })
}

const updateAlbumById = (req, res) =>{
    Discography.findByIdAndUpdate(req.params.id, req,body,{new:true, runValidators:true})
        .then((updateAlbum)=>{
            console.log(updateAlbum)
            res.json(updateAlbum)
        })
        .catch((err)=>{
            console.log("Error in updateAlbumById--->", err);
            res.status(400).json({message:"ERROR--->", error:err.errors});
        })
}

const deleteAlbumById = (req,res) =>{
    Discography.findByIdAndDelete(req.params.id)
        .then((deleteAlbum)=>{
            console.log(deleteAlbum)
            res.json(deleteAlbum)
        })
        .catch((err)=>{
            console.log("Error in deleteAlbumById--->",err)
            res.status(400).json(err);
        })
}

module.exports = {
    addBandToDiscog,
    getAllAlbumsInDb,
    getAlbumById,
    updateAlbumById,
    deleteAlbumById
}