const api_url = `http://localhost:3000`

const getAllPosts = async () => {
  const postResponse = await fetch(api_url);
  const responseJson = await postResponse;
  return postResponse.ok ? Promise.resolve(responseJson) : Promise.reject(responseJson);
};

export default getAllPosts;