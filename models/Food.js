const mongoose = require("mongoose");
const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    calories:{
        type:Number,
        default:0,
        validate(value){
            if (value<o) throw new Error("et ben non");
        }

    }
});

const Food=mongoose.model("Food",foodSchema );

module.exports=Food;