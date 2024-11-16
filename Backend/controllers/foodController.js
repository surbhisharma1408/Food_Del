import foodModel from "../models/foodModel.js";
import fs from 'fs';

const addFood=async(req,res)=>{
    if (!req.file) {
        console.log("filee missing");
    }
    let image_info= `${req.file.filename}`;
       console.log("hereisimageinfo", image_info);
    
    const food= new foodModel({
        name:req.body.name,
        description: req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_info,
    })
    try{
        await food.save();
        res.json({success:true,message:`food added ${image_info}`})
    }catch(error){
        console.log(error);
        res.json({
            success:false,message:"Error in adding food item"
        })
    }
}

const listFood=async(req,res)=>{
    try{
        const foods=await foodModel.find({});
        res.json({success:true,data:foods})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove food item
const removeFood= async (req,res)=>{
        try {
            const food =await foodModel.findById(req.body.id);
            fs.unlink(`uploads/${food.image}`,()=>{})
            await foodModel.findByIdAndDelete(req.body.id);
            res.json({success:true,message:"Food Removed"})
        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
        }
}

export {addFood,listFood,removeFood}

