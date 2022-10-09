const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

  
    // vérifier si ce user existe ou non 
      const userExistes = await User.findOne({ email });
      if(userExistes) {
          res.status(400);
          throw new Error("User Already Exists");
      }

     const user = await User.create({
        name,
        email,
        password,
        pic,
      });
      if (user){
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
          });
      } else{
          res.status(400);
          throw new Error('Eroor Occured!'); 
      }
   
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else{
        res.status(401);
    throw new Error("Invalid Email or Password");
    } 
});
module.exports = { registerUser, authUser };