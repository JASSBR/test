// api.js
import axios from "axios";

const API_BASE_URL = "https://localhost:7155";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/projects`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};


