"use client";

import { useState } from "react";
import { sendContact } from "@/lib/api";

export default function JoinCommunity() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await sendContact(formData);

      alert(result.message);

      setFormData({
        nama: "",
        email: "",
        pesan: "",
      });
    } catch (error) {
      console.error("Gagal mengirim pesan:", error);

      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="join"
      className="px-6 py-16 sm:px-10 sm:py-24"
    >
      <div
        className="
          grid gap-8 rounded-[30px] bg-maroon p-7 text-white
          sm:p-10
          md:grid-cols-2 md:gap-10 md:p-14
        "
      >
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold leading-tight">
            Yuk gabung, jadi bagian dari keluarga Pawmates!
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90">
            Punya pertanyaan atau mau daftar jadi anggota?
            Isi form di samping, tim kami akan segera membalas.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 text-black sm:p-7"
        >
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Nama lengkap"
            required
            className="w-full border-b border-gray-300 py-3 outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Alamat email"
            required
            className="mt-2 w-full border-b border-gray-300 py-3 outline-none"
          />

          <textarea
            name="pesan"
            value={formData.pesan}
            onChange={handleChange}
            placeholder="Ceritakan tentang sahabat bulumu..."
            required
            className="mt-2 h-24 w-full resize-none border-b border-gray-300 py-3 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              mt-6
              w-full
              rounded-full
              bg-gold
              py-3
              font-semibold
              text-brown
              transition
              hover:bg-[#c99536]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </form>
      </div>
    </section>
  );
}