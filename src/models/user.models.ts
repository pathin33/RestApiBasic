import { Schema, model } from "mongoose";
import typeUser from "./type.models.js";
import bcrypt from "bcryptjs";

const userSchema = new Schema<typeUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    age: { type: Number, default: 18 },
  },
  { timestamps: true },
);

// middleware hash password trước khi lưu
userSchema.pre<typeUser>("save", async function () {
  // Nếu password không thay đổi → bỏ qua
  if (!this.isModified("password")) return;

  // Hash mật khẩu (nên dùng 12 salt factor)
  this.password = await bcrypt.hash(this.password, 12);
});

//middleware hash password khi update
userSchema.pre("findOneAndUpdate", async function () {
  // Mongoose Query Interface
  const update: any = this.getUpdate();

  if (!update) return;

  // Lấy mật khẩu từ $set (dành cho updateMany/updateOne) hoặc từ root object (dành cho findByIdAndUpdate)
  const plainPassword = update.password || update.$set?.password;

  if (!plainPassword) return;

  const hashed = await bcrypt.hash(plainPassword, 12);

  // Cập nhật giá trị đã hash trở lại object update
  // tìm giá trị password trong update và ghì đè lại bằng hashed
  if (update.password) update.password = hashed;

  if (update.$set?.password) update.$set.password = hashed;
});
export const userModel = model("User", userSchema);
