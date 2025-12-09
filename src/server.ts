import express from 'express';
import router from './router/user.route.js';
import * as dotenv from 'dotenv';
import connectDB from './config/database.js';
//tải biến môi trường
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/',router);

const runServer = async ()=>{
    try {
        //kết nối tới database
        await connectDB();
        //cổng kết nối của server
        app.listen(port,()=>{
            console.log(`Start running server on port ${port}`);
        });
    } catch (error) {
        console.log("Failed to start server",error);
    }
}
runServer();
