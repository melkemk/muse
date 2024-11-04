import axios from 'axios';

const API_URL = 'http://localhost:3005'; 

export const fetchBooks = async () => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
};

export const addBook = async (userData: unknown) => {
    console.log(userData)
    const response = await axios.post(`${API_URL}/books`, userData);
    return response.data;
  };
  
export const registerUser = async (userData: unknown) => {
  const response = await axios.post(`${API_URL}/users`, userData);
  return response.data;
};

export const lendBook = async (lendingData: unknown) => {
  const response = await axios.post(`${API_URL}/lend`, lendingData);
  return response.data;
};

export const returnBook = async (returnData: unknown) => {
  const response = await axios.post(`${API_URL}/return`, returnData);
  return response.data;
};



export const fetchTakenBooks = async () => {
    const response = await axios.get(`${API_URL}/takenBooks`);
    return response.data;
};