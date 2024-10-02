const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const User = require("../Models/userModel")

const registerUser = asyncHandler ( async (req,res)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(400)
        throw new Error("All Fields Are Not Empty");
    }

    const findEmail = await User.findOne({email});

    const hashPassword = await bcrypt.hash(password,10)

    if(!findEmail){
        const createUser = await User.create({
            username,
            email,
            password : hashPassword
        })

        res.status(201).json({message : "User Created"});
        console.log(createUser);
    }
    else{
        res.status(400);
        throw new Error("Email Already Exists");
    }
})


const loginUser = asyncHandler ( async (req,res)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All Fields Are Not Empty");
    }

    const findEmail = await User.findOne({email});

    if(!findEmail){
        res.status(404);
        throw new Error("User Not Found");
        return;
    }
    else if(findEmail && (await bcrypt.compare(password,findEmail.password))){
        const accessToken = jwt.sign(
        {
            user : findEmail,
        },
        process.env.USER_TOKEN,
        {expiresIn : "1d"}
        )

        res.status(201).json({accessToken})
    }
})

module.exports = {registerUser,loginUser};