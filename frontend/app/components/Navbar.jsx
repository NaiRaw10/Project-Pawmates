export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5">
        <div className="font-bold text-xl text-maroon">
            Pawmates
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#">Beranda</a>
            <a href="#">Tentang Kami</a>
            <a href="#">Galeri</a>
            <a href="#">Kontak</a>
        </div>

        <a href="#" className="rounded-full bg-maroon px-5 py-3 text-sm font-semibold text-white">
            Gabung Sekarang
        </a>
    </nav>
  );
}