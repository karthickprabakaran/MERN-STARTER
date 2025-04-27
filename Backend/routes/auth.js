import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';



const router = express.Router();
router.post('/register', async(req,res)=>{

    try{
        const {name,email, password} = req.body;

        const user = await  User.findOne({email});

        if(user){
            return res.statusCode(401).json({success: false, message: "User Already Exists..... "})
        }

        const hashPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            name,email,password: hashPassword
        });

        await newUser.save();

        return res.status(200).json({success: true, message: " User Created Successfullt"});

    }
    catch(error){

        res.status(500).json({success: true, message: error});

    }

});

export default router;

