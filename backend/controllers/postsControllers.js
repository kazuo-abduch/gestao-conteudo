const postsServices = require('../services/postsServices');

const createPost = async (req, res) => {
  const newPost = req.body;
  const postObj = {
    title: newPost.title,
    content: newPost.content,
  }
  try {
    const createdPost = await postsServices.createPost(postObj);
    return res.status(201).send(createdPost)
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const allPosts = await postsServices.getAllPosts();
    return res.status(200).send(allPosts);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
  createPost,
}