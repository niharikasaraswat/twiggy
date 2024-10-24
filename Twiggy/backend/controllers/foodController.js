import express from 'express';
import multer from 'multer';
import foodModel from "../models/foodModel.js";

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Specify the upload directory

const addFood = async (req, res) => {
    // if (!req.file) {
    //     return res.status(400).json({ success: false, message: "No file uploaded" });
    // }

    //const image_filename = req.file.filename;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        //image: image_filename,
    });

    try {
        const savedFood = await food.save();
        res.json({ success: true, message: "Food Added", food: savedFood });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Route to add food item with file upload
//router.post('/add-food', upload.single('image'), addFood);
router.post('/add-food', addFood);

//all food list
const listfood = async(req,res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    }
    catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove food item
const removeFood = async (req,res) => {
try {
    const food = await foodModel.findById(req.body.id)
    //fs.unlink(`uploads/${food.image}`,() => {})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
} catch (error) {
    console.log(error);
        res.json({success:false,message:"Error"})
}
}

export { addFood,listfood,removeFood };
