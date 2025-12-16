import express from "express";
import routerUser from "./router/user.route.js";
import routerLogin from "./router/login.route.js";
import * as dotenv from "dotenv";
import connectDB from "./config/database.js";
//tải biến môi trường
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//express.json() nhiệm vụ giải mã (parse) JSON mà client gửi lên → chuyển thành req.body
app.use(express.json());

app.use("/", routerUser);
app.use("/", routerLogin);
const runServer = async () => {
  try {
    //kết nối tới database
    await connectDB();
    //cổng kết nối của server
    app.listen(port, () => {
      console.log(`Start running server on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to start server", error);
  }
};
runServer();
