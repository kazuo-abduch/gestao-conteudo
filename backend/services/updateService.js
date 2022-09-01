const { Updates } = require('../models/Updates');

const createUpdate = async (postObj) => {
  const newUpdate = await Updates.create(postObj);
  return newUpdate;
};

module.exports = {
  createUpdate,
};
