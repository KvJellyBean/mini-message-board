const { format } = require("date-fns");
const db = require("../db/queries");

async function getMessages(req, res, path, title) {
  const messages = await db.getMessages();
  messages.map((message) => {
    message.user = message.usermsg;
    message.added = format(new Date(message.added), "P HH:mm a");
    delete message.usermsg;
  });
  const Users = new Set(messages.map((message) => message.user));
  res.render(path, { title: title, messages: messages, Users: Users });
}

async function getUserMessage(req, res) {
  const messages = await db.getMessages();
  const messageId = req.params.id;
  const message = messages.find((message) => message.id == parseInt(messageId));
  message.added = format(new Date(message.added), "P HH:mm a");
  message.user = message.usermsg;
  delete message.usermsg;
  return message;
}

async function getUsers() {
  const users = await db.getUsers();
  users.map((user) => {
    user.user = user.usermsg;
    delete user.usermsg;
  });

  return users.map((user) => user.user);
}

async function addMessage(req, res) {
  const { messageUser, messageText } = req.body;
  await db.addMessage(messageUser, messageText);
  res.redirect("/");
}

module.exports = { getMessages, getUserMessage, getUsers, addMessage };
