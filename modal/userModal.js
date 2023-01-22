const mongoose=require("mongoose")

const userShcema=mongoose.Schema({
    name:{type:String, require:true},
    mobile:{type:Number,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
   
},{
    versionKey:false,
})


const Usermodel=mongoose.model("user",userShcema)

module.exports={Usermodel}