const express=require("express")
const {Usermodel}=require("../modal/userModal")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const userRouter=express.Router()


userRouter.get("/",(req,res)=>{
    res.send("Welcome")
})
userRouter.post("/register",async(req,res)=>{
    const {name,mobile,email,password}=req.body
    try {
        bcrypt.hash(password,5,async(err,secure_passord)=>{
            if(err){
                console.log(err)
            }else{
                const result=new Usermodel({name,mobile,email,password:secure_passord})
                await result.save()
                res.json({message:"User Registeration Successful"})
            }
        })
        
    } catch (err) {
        console.log(err)
        console.log("Something went wrong")
        
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await Usermodel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,async(err,result)=>{
                if(result){
                    const token=jwt.sign({course:"backend"},"masai")
                    res.json({message:"Login Success","token":token})
                }else{
                    res.json({message:"Wrong Credential"})
                }
            })
          
        }else{
            res.json({message:"Wrong Credential"})
        }
    } catch (err) {
        console.log(err)
        console.log("Something went wrong")
    }
})

module.exports={userRouter}