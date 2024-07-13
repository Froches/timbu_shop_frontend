import axios from "axios";

const API_URL = "https://timbu.cloud/"; // Base URL of Timbu API

const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}`, error);
    throw error;
  }
};

export { getProducts, getProductById };
