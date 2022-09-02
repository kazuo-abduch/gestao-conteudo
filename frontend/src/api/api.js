import axios from 'axios';
const api_url = `http://localhost:3001`

const getAllPosts = async () => {
  const postResponse = await axios.get(api_url);
  const responseJson = await postResponse.data;
  return responseJson
};

export default getAllPosts;