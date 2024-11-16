import express, { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'




const app= express();
const port=4000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: "10000kb", extended: true }));

connectDB();

//api endpoints
app.use("/api/food",foodRouter);
app.use('/images', express.static('uploads'));

app.use("/api/user",userRouter);


app.get("/", (req,res)=>{
     res.send("API Working");
});

app.listen(port,()=>{
    console.log(`Server Started on port ${port}`)
})

//mongodb+srv://ssurbhisharma1408:Surbhi1408@delivery.4wmpr.mongodb.net/?retryWrites=true&w=majority&appName=Delivery