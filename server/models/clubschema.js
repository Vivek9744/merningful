




const mongoose=require('mongoose');
const clubSchema=new mongoose.Schema({
    clubName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
const club=new mongoose.model("club",clubSchema);
module.exports=club
