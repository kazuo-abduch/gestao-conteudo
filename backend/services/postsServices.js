const { Posts } = require('../models');

const createPost = async (postObj) => {
  const post = await Posts.create(postObj);
  return post;
};

const getAllPosts = async () => {
  const allPosts = await Posts.findAll({
    attributes: { exclude: ['createDate'] }
  });
  return allPosts;
};

module.exports = {
  getAllPosts,
  createPost,
};