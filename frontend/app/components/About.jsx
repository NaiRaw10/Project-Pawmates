export default function About() {
  return (
    <section
      id="about"
      className="grid gap-10 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.5fr] lg:gap-12 lg:px-10 lg:py-24"
    >
        <div className="flex items-center">
            <div className="w-full rounded-[30px] bg-[#D7CCBA] p-7 sm:p-8 lg:p-10">
                <p className="text-lg font-bold leading-relaxed text-maroon sm:text-xl">
                    &quot;Kami percaya, cinta pada anjing adalah bahasa yang
                    mempersatukan siapa saja, dari segala latar belakang.&quot;
                </p>

                <p className="mt-5 text-sm font-semibold text-brown sm:mt-6">
                    — Founder Pawmates, 2019
                </p>
            </div>
        </div>

        <div>
            <span className="text-xs font-bold text-maroon">
                TENTANG KAMI
            </span>

            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-brown sm:mt-4 sm:text-4xl">
                Dari sekadar hobi jalan bareng, jadi keluarga besar pecinta anjing
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#665A54] sm:mt-5 sm:text-base">
                Pawmates lahir tahun 2019 dari sekelompok kecil pemilik anjing
                yang rutin berkumpul di taman kota tiap akhir pekan. Kini kami
                telah berkembang menjadi komunitas nasional dengan ribuan anggota.
            </p>

            <div className="mt-7 grid gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-7">
                <div>
                    <h3 className="font-bold text-brown">
                    🐾 Komunitas Hangat
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                    Saling dukung antar pemilik anjing.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-brown">
                    🐾 Event Rutin
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                        Jalan pagi & gathering tiap bulan.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-brown">
                    🐾 Info & Edukasi
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                        Tips kesehatan dari dokter hewan.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-brown">
                    🐾 Bantu Adopsi
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                        Menjembatani anjing dengan keluarga baru.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}