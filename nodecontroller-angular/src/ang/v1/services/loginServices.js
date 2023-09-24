const loginDB = require("../data/loginDB");

const getAllUsers = () => {
  const allUsers = loginDB.getAllUsers();
  return allUsers;
};

const getOneUser = () => {
  return;
};

const createNewUser = () => {
  return;
};

const updateOneUser = () => {
  return;
};

const deleteOneUser = () => {
  return;
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
