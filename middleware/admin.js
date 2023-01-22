const jwt=require("jsonwebtoken")
require("dotenv").config()
const adminAuthenticate=(req,res,next)=>{
    const AdminToken=req.headers.authorization
    if(AdminToken){
        const decode=jwt.verify(AdminToken,process.env.key)
        if(decode){
           
            next()
        }else{
            res.send({message:"Please Login Again"})
        }
       
    }else{
        res.send({message:"Please Login First"})
    }

}
module.exports={adminAuthenticate}