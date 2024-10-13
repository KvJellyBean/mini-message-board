const pool = require("./pool");

async function getMessages() {
  const query = "SELECT * FROM messages ORDER BY added";
  const { rows } = await pool
    .query(query)
    .catch((err) => console.error("Error executing query", err.stack));
  return rows;
}

async function getUserMessage(user) {
  const query = "SELECT * FROM messages WHERE userMsg = $1";
  const { rows } = await pool
    .query(query, [user])
    .catch((err) => console.error("Error executing query", err.stack));
  return rows;
}

async function getUsers() {
  const query = "SELECT DISTINCT userMsg FROM messages";
  const { rows } = await pool
    .query(query)
    .catch((err) => console.error("Error executing query", err.stack));
  return rows;
}

async function addMessage(user, text) {
  await pool
    .query("INSERT INTO messages(userMsg, text,added) VALUES($1, $2, NOW())", [
      user,
      text,
    ])
    .catch((err) => console.error("Error executing query", err.stack));
}

module.exports = { getMessages, getUserMessage, getUsers, addMessage };
