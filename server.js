const express =require ("express");
const app=express();
const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://sb:123@cluster0.mongodb.net/test?retryWrites=true&w=majority").then(()=> {console.log("Connecté")});


app.listen(3000,()=>{
console.log("Server is server")

});

