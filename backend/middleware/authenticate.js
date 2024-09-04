import express from "express";
import { vertifyToken } from "../utils/jwt.js";

export const autheticate = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).send("Access denied");
  }
  const decoded = vertifyToken(token);
  req.user = decoded;
  next();
};
