import axios from 'axios';
const api_url = `http://localhost:3001`

export const getAllPosts = async () => {
  const postResponse = await axios.get(api_url);
  const responseJson = await postResponse.data;
  return responseJson
};

export const createNewPost = async (title, content) => {
  const result = await axios.post(api_url, { title, content})
  return result;
}
