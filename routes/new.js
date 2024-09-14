const express = require("express");
const { format } = require("date-fns");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", (req, res) => {
  controller.getMessages(req, res, "form", "New Message");
});

router.post("/", (req, res) => {
  controller.addMessage(req, res);
});

module.exports = router;
