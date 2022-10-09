const asyncHandler = require('express-async-handler');
const Publication = require('../models/pubModel');

const addPublication = asyncHandler(async (req, res) => {
    const { description, pic } = req.body;

    const publication = await Publication.create({
        description,
        pic,
      });
      if (publication){
        res.status(201).json({
          _id: publication._id,
          description: publication.description,
          pic: publication.pic,
        });
    } else{
        res.status(400);
        throw new Error('Eroor Occured!'); 
    } 
});


module.exports= addPublication;


