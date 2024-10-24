import express from "express"
import { addFood,listfood,removeFood } from "../controllers/foodController.js"
import multer from 'multer'

const foodRouter = express.Router();

//Image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

//foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.post("/add",addFood)

foodRouter.get("/list",listfood)

foodRouter.post("/remove",removeFood)







export default foodRouter;