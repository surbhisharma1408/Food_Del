import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://ssurbhisharma1408:Surbhi1408@delivery.4wmpr.mongodb.net/?retryWrites=true&w=majority&appName=Delivery')
    .then(()=>console.log("DB Connected"));
}

