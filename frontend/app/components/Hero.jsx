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
      </div>

      <div></div>
    </section>
  );
}