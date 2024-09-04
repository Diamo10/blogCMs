import express from "express";
import blogRoutes from "./routes/blogRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cmtRoutes from "./routes/cmtRoutes.js";
import connectDB from "./utils/db.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
app.use("/cmt", cmtRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
