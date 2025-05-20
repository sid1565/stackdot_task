import joi from 'joi';
import { user_register, get_institutes } from "../services/userService.js"
export async function register (req, res) {
    try {
        console.log("REQ++",req);
        console.log("BODY++",req.body);
        const registerSchema = joi.object({
            institute_type: joi.number().min(1).max(4).required(),
            board_id: joi.number().min(1).max(2).required(),
            medium_id: joi.number().min(1).max(3).required(),
            class_id: joi.number().min(1).max(4).required(),
            standard_id: joi.number().required(),
            subject_id: joi.number().required(),
        })
        const {error} = registerSchema.validate(req.body);
        if(error) {
            res.status(400).json({message: error.details.message})
        }
        const data = await user_register(req.body);
        res.send({code: 1, message:"registration success", data: {data}})
    } catch (error) {
        console.log("Error++",error)
        console.log("Error.message++",error.message)
        Promise.reject(error);
    }
}

export async function get_institute(req, res) {
    try {
        const data = await get_institutes(req.body);
        res.send({code: 1, message:"get institute data", data })
    } catch (error) {
        console.log("Error++",error)
        console.log("Error.message++",error.message)
        Promise.reject(error);
    }
}