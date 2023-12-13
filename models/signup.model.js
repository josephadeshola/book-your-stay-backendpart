const mongoose=require("mongoose");
const bcryptjs = require("bcryptjs")
let userSchema = mongoose.Schema({
    fullName: String,
    email: { type: String, unique: true, required: true },
    password:{ type:String,required:true}
})
let saltRound =10;

userSchema.pre("save", function(next){
    bcryptjs.hash(this.password, saltRound, (err, hash)=>{
        if(err){
            console.log(err);

        }
        else{
            console.log(hash);
            this.password=hash
            next()
        }
        console.log(this.password);
    })
})
let userModel=mongoose.model("user_details", userSchema)
module.exports = userModel;