import axios from "axios";
const API_URL = "http://localhost:3000/blog";

export const getBlog = async () => {
  try {
    const response = await axios.get(`${API_URL}/list`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getBlogByID = async (id) => {
  const token = sessionStorage.getItem("token");
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
