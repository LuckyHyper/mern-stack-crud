const express = require("express");
const {
  AddUser,
  FindUsers,
  UpdateUser,
  DeleteUser,
} = require("../controllers/users.controller");
const router = express.Router();

/* add user */
router.post("/student", AddUser);

/* find all users */
router.get("/students", FindUsers);

/* update user */
router.put("/student", UpdateUser);

/* delete user */
router.delete("/student", DeleteUser);

module.exports = router;
