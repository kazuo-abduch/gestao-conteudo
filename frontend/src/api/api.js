import axios from 'axios';
const API_PORT = '3001';
const api_url = `http://localhost:${API_PORT}`

export const getAllPosts = async () => {
  const postResponse = await axios.get(api_url);
  const responseJson = await postResponse.data;
  return responseJson
};

export const getPostById = async (id) => {
  const postResponse = await axios.get(`${api_url}/${id}`)
  const responseJson = await postResponse.data;
  return responseJson; 
}

export const createNewPost = async (title, content) => {
  const result = await axios.post(api_url, { title, content })
  return result;
}

export const findUpdates = async (id) => {
  const updatesList = await axios.get(`${api_url}/updates/${id}`)
  const responseJson = await updatesList.data;
  return responseJson;
}

export const updatePost = async (id, postOjb) => {
  const newPost = await axios.put(`${api_url}/${id}`, postOjb)
  return newPost;
}

export const deletePost = async (id) => {
  await axios.delete(`${api_url}/${id}`);
}
