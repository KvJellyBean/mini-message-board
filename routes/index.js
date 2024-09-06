const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", (req, res) => {
  controller.getMessages(req, res, "index", "JellyBoard");
});

router.get("/message/:id", async (req, res) => {
  const message = await controller.getUserMessage(req, res);
  const user = await message.user;
  const Users = await controller.getUsers();

  res.render("message", {
    title: `Message by ${user}`,
    message: message,
    Users: Users,
  });
});

module.exports = router;
