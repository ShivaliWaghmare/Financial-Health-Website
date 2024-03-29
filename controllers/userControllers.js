const userModel = require('../models/userModel')

// LOGIN CALLBACK
const loginControllers = async (req, res) => {
    try {
       const {email, password} = req.body;
       const user = await userModel.forOne({email,password}) 
       if(!user){
          return res.status(404).send("User Not Found");
       }
       res.status(200).json({
         success: true,
         user
       });
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
};

// REGISTER CALLBACK
const registerControllers = async (req, res) => {
    try {
       const newUser = new userModel(req.body);
       await newUser.save();
       res.status(201).json({
        success: true,
        newUser
       })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
};

module.exports = {loginControllers, registerControllers };