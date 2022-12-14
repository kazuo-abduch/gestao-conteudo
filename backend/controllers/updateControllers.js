const updatesServices = require('../services/updateService');

const getUpdatesByPostId = async (req, res) => {
  const { id } = req.params;
  try {
    const updatesList = await updatesServices.findUpdatesByPostId(id);
    return res.status(200).send(updatesList)
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getUpdatesByPostId,
}