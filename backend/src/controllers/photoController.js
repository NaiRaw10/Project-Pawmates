const photoModel = require("../models/photoModel");

const getPhotos = async (req, res) => {
  try {
    const photos = await photoModel.getAllPhotos();

    res.json({
      success: true,
      data: photos,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Gagal mengambil data foto.",
    });
  }
};

module.exports = {
  getPhotos,
};