export default function About() {
  return (
    <section
      id="about"
      className="grid gap-12 bg-white px-10 py-24 lg:grid-cols-[0.8fr_1.5fr]"
    >
        <div className="flex items-center">
            <div className="rounded-[30px] bg-[#D7CCBA] p-10">
            <p className="text-xl font-bold leading-relaxed text-maroon">
                &quot;Kami percaya, cinta pada anjing adalah bahasa yang
                mempersatukan siapa saja, dari segala latar belakang.&quot;
            </p>

            <p className="mt-6 text-sm font-semibold text-brown">
                — Founder Pawmates, 2019
            </p>
            </div>
        </div>

        <div>
            <span className="text-xs font-bold text-maroon">
            TENTANG KAMI
            </span>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold text-brown">
            Dari sekadar hobi jalan bareng, jadi keluarga besar pecinta anjing
            </h2>

            <p className="mt-5 max-w-2xl leading-relaxed text-[#665A54]">
            AMAGI lahir tahun 2019 dari sekelompok kecil pemilik anjing
            yang rutin berkumpul di taman kota tiap akhir pekan. Kini kami
            telah berkembang menjadi komunitas nasional dengan ribuan anggota.
            </p>
        </div>
    </section>
  );
}