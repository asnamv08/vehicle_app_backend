const mongoose=require("mongoose")
const vehicleschema=new mongoose.Schema(
    {
        vehiclename:String,
        vehiclenumber:String,
        vehicleType:String,
        vehicleprice:String
    }
)
module.exports=mongoose.model("vehicles",vehicleschema)