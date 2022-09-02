const { Updates } = require('../models/Updates');

const createUpdate = async (postObj) => {
  const newUpdate = await Updates.create(postObj);
  return newUpdate;
};

const getUpdatesByPostId = async () => {
  const updateList = await Updates.findAll();
  return updateList;
}

module.exports = {
  createUpdate,
  getUpdatesByPostId,
};
