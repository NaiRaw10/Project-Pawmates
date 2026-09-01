export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#2F1710] px-10 py-14 text-white"
    >
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-xl font-bold text-gold">
            Pawmates
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Komunitas pecinta anjing terbesar di Indonesia.
            Berbagi kasih sayang, edukasi, dan kebersamaan
            lewat sahabat berbulu kita.
          </p>
        </div>

        <div>
          <h3 className="font-bold">
            Navigasi
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-300">
            <a href="#home" className="block hover:text-white">
              Beranda
            </a>

            <a href="#about" className="block hover:text-white">
              Tentang Kami
            </a>

            <a href="#gallery" className="block hover:text-white">
              Galeri
            </a>

            <a href="#join" className="block hover:text-white">
              Kontak
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">
            Komunitas
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-300">
            <p>Cara Bergabung</p>
            <p>Adopsi Anjing</p>
            <p>Kalender Event</p>
            <p>FAQ</p>
          </div>
        </div>

        <div>
            <h3 className="font-bold">
                Hubungi Kami
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-300">
                <p>
                    Jl. Taman Anjing No. 8, Jakarta Selatan
                </p>

                <p>
                    0812-3456-7890
                </p>

                <p>
                    halo@pawmates.id
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}