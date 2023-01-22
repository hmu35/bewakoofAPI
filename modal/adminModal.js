const mongoose=require("mongoose")
mongoose.set('strictQuery', false)

const adminShcema=mongoose.Schema({
    name:{type:String, require:true},
    number:{type:Number,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
   
},{
    versionKey:false,
})


const Adminmodel=mongoose.model("admin",adminShcema)

module.exports={Adminmodel}