import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://niharikasaraswat442:niha14oct@cluster0.vqocz.mongodb.net/Food-Delivery').then(()=>console.log("Db Connected"));
}