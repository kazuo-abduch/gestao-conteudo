const { Updates } = require('../models');

const createUpdate = async (postObj) => {
  const newUpdate = await Updates.create(postObj);
  return newUpdate;
};

const findUpdatesByPostId = async (id) => {
  const updateList = await Updates.findAll({
    where: { postId: id }
  });
  return updateList;
}

module.exports = {
  createUpdate,
  findUpdatesByPostId,
};
