const mongoose=require("mongoose");
const DB="mongodb+srv://mern1:mernraman@cluster0.lykrowe.mongodb.net/mern1?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
    console.log("MongoDb connection started")).catch((error)=>console.log(error.message));

