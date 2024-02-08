const express=require("express")
const vehiclemodel=require("../models/vehiclemodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let vehicle=new vehiclemodel(data)
    let result=await vehicle.save()
    res.json({
        status:"success"
    })
})
router.get("/view",async(req,res)=>{
    let data=await vehiclemodel.find()
    res.json(data)
})
router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await vehiclemodel.find(input)
    res.json(data)
})

module.exports=router