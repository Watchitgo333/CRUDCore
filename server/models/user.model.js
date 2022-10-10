const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema(
    {
        first_name:{
            type:String,
            required:[true, "First name is required!"]
        },
        last_name:{
            type:String,
            required:[true, "Last name is required!"]
        },
        email:{
            type:String,
            required:[true, "Email is required!"]
        },
        password:{
            type:String,
            required:[true, "Password is required!"],
            minlength:[8, "Password must be at least 8 characters!"]
        },
        bands:[
            {
                type: mongoose.Schema.Types.ObjectId, ref:'Band'
            }
        ]
    },
    {timestamps:true}
);

//Virtual fields that won't be stored in db
UserSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword)
.set(value => this._confirmPassword = value)

//Mongoose middle ware below, must be ES5
UserSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', "Password must match")
    }
    next()
})

UserSchema.pre('save', async function(next){
    console.log("In pre save middleware", this.password)
    try{
        const hashedPassword =  await bcrypt.hash(this.password, 10)
        console.log("Hashed password: ", hashedPassword)
        this.password = hashedPassword
        next()
    }
    catch(error){
        console.log('Error in Save --- ', error)
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;