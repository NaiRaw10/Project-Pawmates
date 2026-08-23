export default function JoinCommunity() {
  return (
    <section
      id="join"
      className="px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="grid gap-8 rounded-[30px] bg-maroon p-7 text-white sm:p-10 md:grid-cols-2 md:gap-10 md:p-14">       
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold leading-tight">
            Yuk gabung, jadi bagian dari keluarga Pawmates!
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90">
            Punya pertanyaan atau mau daftar jadi anggota?
            Isi form di samping, tim kami akan segera membalas.
          </p>
        </div>

        <form className="rounded-2xl bg-white p-6 text-black sm:p-7">
          <input
            type="text"
            name="nama"
            placeholder="Nama lengkap"
            className="w-full border-b border-gray-300 py-3 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Alamat email"
            className="mt-2 w-full border-b border-gray-300 py-3 outline-none"
          />

          <textarea
            name="pesan"
            placeholder="Ceritakan tentang sahabat bulumu..."
            className="mt-2 h-24 w-full resize-none border-b border-gray-300 py-3 outline-none"
          />

            <button
                type="submit"
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
                "
            >
                Kirim Pesan
            </button>
        </form>

      </div>
    </section>
  );
}