const express = require("express");
const loginController = require("../controller/loginController");
const router = express.Router();

router.get("/", loginController.getAllUsers);

router.get("/:loginId", loginController.getOneUser);

router.post("/", loginController.createNewUser);

router.patch("/:updateUserID", loginController.updateOneUser);

router.delete("/:deleteUserID", loginController.deleteOneUser);

module.exports = router;
