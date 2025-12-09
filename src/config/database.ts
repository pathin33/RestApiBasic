import mongoose from "mongoose";
const connectDB =  async ()=>{
     try {
        const URIDB = process.env.URIDB;
        if(!URIDB){
            console.log("Connection string is invalid");
            return;
        }
        await mongoose.connect(URIDB);
        console.log("Connect database success");
     } catch (error) {
        console.log("Connect error",error);
     }
};
export default connectDB;