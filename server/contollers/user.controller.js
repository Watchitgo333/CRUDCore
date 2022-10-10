const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET

module.exports = {
    registerUser: async (req,res) => {
        try {
            const user = new User(req.body)
            //create new user in db, middleware hashed password before save to db
            const newUser = await user.save()
            console.log("USer created: ", newUser)
            //creates a JWT using important info
            const userToken = jwt.sign({_id:newUser._id, first_name:newUser.first_name, last_name:newUser.last_name, email:newUser.email}, SECRET)
            //return success response to client with JWT as cookie
            res.status(201)
                .cookie('userToken', userToken, 
                    {httpOnly:true, expires: new Date(Date.now() + 90000)})
                    .json({successMessage:'User logged in ', user:newUSer})
        }
        catch(error){
            res.status(400).json(error)
        }
    },

    loginUser: async (req,res) => {
        //check if user document is already in db
        const userDoc = await User.findOne({email:req.body.email});
        console.log("User Doc ", userDoc)
        if(!userDoc){
            res.status(400).json({error:"Invalid email/password"})
        } try{
            //compare pw to one in db
            const isPWValid = await bcrypt.compare(req.body.password, userDoc.password)
            console.log(isPWValid)
            if(!isPWValid){
                res.status(400).json({error:"Invalid email/password"})
            } else {
            //create JWT
                const userToken = jwt.sign({_id:newUser._id, first_name:newUser.first_name, last_name:newUser.last_name, email:newUser.email}, SECRET)
                console.log('JWT', userToken)
                //return success message and JWT in cookie
                res.status(201)
                .cookie('userToken', userToken, 
                    {httpOnly:true, expires: new Date(Date.now() + 90000)})
                    .json({successMessage:'User logged in ', user:newUSer})
            }
        } 
        catch(error){
            res.status(400).json({error:"Invalid email/password"})
        }
    },
    logoutUser: async (req, res) => {
        res.clearCookie('userToken')
        res.json({successMessage:"User logged out"})
    },
    getLoggedInUser: (req,res) => {
        const user = jwt.verify(req.cookie.userToken, SECRET)
        User.findOne({_id:user._id})
        .then((user)=>{
            res.json(user);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

