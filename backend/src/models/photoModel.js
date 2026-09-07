const db = require("../config/database");

const getAllPhotos = async () => {
  const [rows] = await db.query(`
    SELECT
      id,
      title,
      image_url,
      created_at
    FROM photos
    ORDER BY created_at DESC
  `);

  return rows;
};

module.exports = {
  getAllPhotos,
};