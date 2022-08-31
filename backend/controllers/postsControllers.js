const postsServices = require('../services/postsServices');

const createPosts = async (req, res) => {
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

module.exports = {
  createPosts,
}