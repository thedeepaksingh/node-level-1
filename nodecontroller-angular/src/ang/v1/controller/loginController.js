const loginServices = require("../services/loginServices");

const getAllUsers = (req, res) => {
  const allUSer = loginServices.getAllUsers();
  res.send("Get all users");
};

const getOneUser = (req, res) => {
  res.send("Get an existing user");
};

const createNewUser = (req, res) => {
  res.send("Create a new user");
};

const updateOneUser = (req, res) => {
  res.send("Update an existing user");
};

const deleteOneUser = (req, res) => {
  res.send("Delete an existing user");
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
