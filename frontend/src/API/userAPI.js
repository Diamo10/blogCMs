import axios from "axios";

const API_URL = "http://localhost:3000/user";

export const loginUser = async ({ username, password }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    return response.data.token;
  } catch (error) {
    console.log(error);
  }
};
export const registerUser = async (props) => {
  try {
    const response = await axios.post(`${API_URL}/add`, props);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getUserById = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/`, {
      headers: { Authorization: "Bearer " + token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAuthor = async (id) => {
  const token = sessionStorage.getItem("token");
  try {
    const response = await axios.get(`${API_URL}/author/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
