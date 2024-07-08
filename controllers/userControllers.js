const userModel = require('../models/user');

exports.createUser = async(req,res)=>{
    try{
    await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        // isActive: req.body.isActive
    })
    return res.status(201).json({message:"new user"});}
    catch(error){
        console.log(error);
    }
}