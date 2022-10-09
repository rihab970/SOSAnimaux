const mongoose = require('mongoose');


const PubSchema = new mongoose.Schema({
    
    description: {
        type: String,
        required: true,
    },
   pic:{
    type: String,
    required: true,
    default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
   },
},
{
    timestamps: true,
}
);

const Publication = mongoose.model('publication', PubSchema);
module.exports= Publication;
