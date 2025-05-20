import express from "express";
import { register, get_institute } from '../controllers/userController.js'
const router = express.Router();

router.get('/', function (req, res) {
    res.send("Hello, route is working");
})

router.post('/register', register);
router.get('/get_nstitute', get_institute);

export default router;