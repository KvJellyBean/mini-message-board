const { format } = require("date-fns");

const messages = [
  {
    text: "Welcome To JELLYBOARD!",
    user: "KvJellyBean",
    added: format(new Date(), "P HH:mm a"),
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), "P HH:mm a"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(), "P HH:mm a"),
  },
];

module.exports = messages;
