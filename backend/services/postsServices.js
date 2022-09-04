const { Posts, Updates } = require('../models');

const createPost = async (postObj) => {
  const post = await Posts.create(postObj);
  console.log(post);
  const oldPostObj = {
    postId: post.id,
    oldTitle: postObj.title,
    oldContent: postObj.content,
    oldDate: post.createDate,
  }
  await Updates.create(oldPostObj);
  return post;
};

const getAllPosts = async () => {
  const allPosts = await Posts.findAll({
    attributes: { exclude: ['createDate'] }
  });
  return allPosts;
};

const findPost = async (id) => {
  const post = await Posts.findByPk(id);
  return post;
}

const updatePost = async (id, post) => {
  const oldPost = await findPost(id);
  const oldPostObj = {
    postId: id,
    oldTitle: post.title,
    oldContent: post.content,
    oldDate: oldPost.createDate,
  }
  const newUpdate = await Updates.create(oldPostObj);
  if (!newUpdate) {
    throw new Error('Update failed');
  }
  const updatedPost = await Posts.update(post, {
    where: {
      id,
    },
  });
  return updatedPost;
};

const deletePost = async (id) => {
  await Posts.delete({ where: { id } } );
}

module.exports = {
  getAllPosts,
  findPost,
  createPost,
  updatePost,
  deletePost,
};
