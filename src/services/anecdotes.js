import axios from "axios";


const baseUrl = "http://localhost:3030/anecdotes";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log("Response:", response);
  return response.data;
}

export default { getAll };
