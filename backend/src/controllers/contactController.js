const contactModel = require("../models/contactModel");

const createContact = async (req, res) => {
  try {
    const { nama, email, pesan } = req.body;

    if (!nama || !email || !pesan) {
      return res.status(400).json({
        success: false,
        message: "Nama, email, dan pesan wajib diisi.",
      });
    }

    await contactModel.createContact(
      nama,
      email,
      pesan
    );

    res.status(201).json({
      success: true,
      message: "Pesan berhasil dikirim.",
    });
  } catch (error) {
    console.error("CREATE CONTACT ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Gagal mengirim pesan.",
    });
  }
};

module.exports = {
  createContact,
};