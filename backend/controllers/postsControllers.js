const postsServices = require('../services/postsServices');

const createPost = async (req, res) => {
  const newPost = req.body;
  const postObj = {
    title: newPost.title,
    content: newPost.content,
  }
  try {
    const createdPost = await postsServices.createPost(postObj);
    return res.status(201).send(postObj)
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

const getPostById = async (req, res) => {
  const { id } = req.params
  try {
    const postById = await postsServices.findPost(id);
    return res.status(200).send(postById);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
}

const updatePost = async (req, res) => {
  const newPost = req.body;
  const { id } = req.params;
  const postObj = {
    title: newPost.title,
    content: newPost.content,
  }
  try {
    await postsServices.updatePost(id, postObj);
    return res.status(200).send(postObj)
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await postsServices.deletePost(id)
    return res.status(204).end();
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
}