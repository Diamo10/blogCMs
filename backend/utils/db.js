import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/Blog");
  console.log("connected to database");
};
export default connectDB;
