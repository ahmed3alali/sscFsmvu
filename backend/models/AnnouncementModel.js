import mongoose from "mongoose";


const annouceSchema = new mongoose.Schema({


message:{type: String, required:true},
explination:{type: String, required:true},

createdBy:{type:String, required:true},
createdAt:{type:Date, default: Date.now()},
imageUrl: { type: String, required: false },


});


export default mongoose.model("Announcement",annouceSchema);