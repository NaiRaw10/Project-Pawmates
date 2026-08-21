export default function Hero() {
  return (
    <section
        id="home"
        className="grid min-h-162.5 items-center gap-10 px-10 py-16 lg:grid-cols-2"
    >
        <div>
            <span className="inline-block rounded-full bg-[#D7CCBA] px-4 py-2 text-xs font-bold text-maroon">
                KOMUNITAS PECINTA ANJING INDONESIA
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.15] text-brown md:text-5xl">
                Selamat datang di Pawmates, rumah bagi para sahabat berbulu
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#665A54] md:text-base">
                Tempat berkumpul para pecinta anjing untuk berbagi cerita,
                jalan bareng, adopsi, dan saling bantu merawat sahabat berkaki
                empat kita.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
                <a
                    href="#join"
                    className="rounded-full bg-[#8F1712] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#70120E] hover:shadow-lg"
                >
                    Gabung Komunitas
                </a>

                <a
                    href="#gallery"
                    className="rounded-full border border-[#351B14] px-6 py-3 text-sm font-semibold text-[#351B14] transition-all duration-300 hover:-translate-y-1 hover:bg-[#351B14] hover:text-white hover:shadow-md"
                >
                    Lihat Galeri
                </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-8 md:gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-maroon">
                        2.400+
                    </h3>

                    <p className="mt-1 text-[10px] text-[#665A54]">
                        Anggota Aktif
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-maroon">
                        18
                    </h3>

                    <p className="mt-1 text-[10px] text-[#665A54]">
                        Kota di Indonesia
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-maroon">
                        60+
                    </h3>

                    <p className="mt-1 text-[10px] text-[#665A54]">
                        Event Tiap Tahun
                    </p>
                </div>
            </div>
        </div>

        <div className="flex justify-center">
            <div className="h-120 w-full max-w-150 overflow-hidden rounded-[35%]">
                <img
                src="/images/image.png"
                alt="Anjing Pawmates"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
        </div>
    </section>
  );
}