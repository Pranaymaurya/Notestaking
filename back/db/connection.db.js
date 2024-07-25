import mongoose from "mongoose";

const connect=()=>{mongoose.connect('mongodb://localhost:27017/work').then(console.log("connected"))}

export default connect