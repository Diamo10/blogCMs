import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";
export const registerUser = async (req, res) => {
  try {
    const body = req.body;
    //check if user is already registered
    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      return res.status(401).send("already registered");
    }
    const saltRounds = 10;
    const hashedpassword = await bcrypt.hash(body.password, saltRounds);
    body.password = hashedpassword;
    const newUser = new User(body);
    await newUser.save();
    return res.status(201).send("user registered");
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error in registerUser");
  }
};
export const loginUser = async (req, res) => {
  const body = req.body;
  const existingUser = await User.findOne({ username: body.username });
  if (!existingUser) {
    return res.status(404).send("User not found");
  }
  const isMatch = await bcrypt.compare(body.password, existingUser.password);
  if (!isMatch) {
    return res.status(404).send("incorrect password");
  }
  console.log(existingUser);
  const token = generateToken({ id: existingUser._id });
  console.log(token);
  return res
    .status(200)
    .send({ token, message: "successfully loggedin successfully" });
};
export const getUserById = async (req, res) => {
  const user = req.user;
  const userData = await User.findOne({ _id: user.id });
  return res.status(200).send(userData);
};
export const getAuthor = async (req, res) => {
  const { id } = req.params;
  const userData = await User.findOne({ _id: id });
  return res.status(200).send(userData);
};
