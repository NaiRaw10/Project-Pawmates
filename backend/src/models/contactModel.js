const db = require("../config/database");

const createContact = async (nama, email, pesan) => {
  const [result] = await db.query(
    `
      INSERT INTO contacts (nama, email, pesan)
      VALUES (?, ?, ?)
    `,
    [nama, email, pesan]
  );

  return result;
};

module.exports = {
  createContact,
};