import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="home"
        className="min-h-screen bg-cream pt-32"
      >
        <div className="flex min-h-[80vh] items-center justify-center">
          <h1 className="text-4xl font-bold text-brown">
            Pawmates
          </h1>
        </div>
      </main>
    </>
  );
}