const { string } = require("joi");
const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");
const userSchema= new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    jobtitle:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    Date:{
        type:Date,
        default: Date.now()
    }
})
module.exports = mangoose.model('employeeinfo',userSchema);