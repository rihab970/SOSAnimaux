const asyncHandler = require('express-async-handler');
const Publication = require('../models/pubModel');

const getPub = async (req, res) =>{
    try{
     const publications = await Publication.find();
     res.status(200).json(publications);
   
    } catch(error){
      res.status(404).json({message: error.message});
    }
   };
module.exports = getPub;
