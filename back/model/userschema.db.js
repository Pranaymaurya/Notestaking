import mongoose from "mongoose";

const userschema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        details:{
            type:String,
            required:true
        }

    }
)

const models=mongoose.model('usermodels',userschema)
export default models