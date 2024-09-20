const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    userMsg VARCHAR(50) NOT NULL,
    text TEXT NOT NULL,
    added TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO messages (userMsg, text) VALUES ('KvJellyBean', 'Welcome To JELLYBOARD!');
INSERT INTO messages (userMsg, text) VALUES ('Amando', 'Hi there!');
INSERT INTO messages (userMsg, text) VALUES ('Charles', 'Hello World!');
`;

async function seedDatabase() {
  console.log("Populating database...");
  const clinet = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await clinet.connect();
  await clinet.query(SQL);
  await clinet.end();
  console.log("Database populated!");
}

seedDatabase();
