const { Posts } = require('../models');

const createPost = async (postObj) => {
  const post = await Posts.create(postObj);
  return post;
};

module.exports = {
  createPost,
};