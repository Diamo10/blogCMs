import jwt from "jsonwebtoken";

const JWT_SECRET = "ajahkfhakjkskjhjkakdaj";

export const generateToken = (userId) => {
  try {
    const token = jwt.sign(userId, JWT_SECRET);
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    return null;
  }
};
export const vertifyToken = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
};
