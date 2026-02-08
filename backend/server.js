const express=require("express");
const app=express();
const dotenv=require("dotenv").config();
const connectDB=require("./config/connectionDB")
const PORT=process.env.PORT || 3000;
connectDB()
app.use(express.json());

const routes=require("./routes/recipe1");
app.use("/recipe",routes)
app.listen(PORT,(err)=>{
  console.log(`app is live on port ${PORT}`)
})