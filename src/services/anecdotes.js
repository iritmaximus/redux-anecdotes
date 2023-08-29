import axios from "axios";


const baseUrl = "http://localhost:3030/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log("Response:", response);
  return response.data;
}

const create = async anecdote => {
  const response = await axios.post(baseUrl, anecdote);
  console.log(response);
  return response.data;
}

const update = async anecdote => {
  const response = await axios.put(baseUrl + "/" + anecdote.id, anecdote);
  console.log("Response:", response);
  return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update };
