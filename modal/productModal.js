const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    Title:{type:String,require:true},
    Img_url:{type:String,require:true},
    Mrp:{type:Number,require:true},
    Price:{type:Number,require:true},
    Category:{type:String,require:true},
    Gender:{type:String,require:true},
    Brand:{type:String,require:true},
    Design:{type:String,require:true},
    Rating:{type:Number,require:true}

},{
    versionKey:false
})


const Productmodel=mongoose.model("product",productSchema)
module.exports={Productmodel}