import JoinCommunity from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero></Hero>

      <JoinCommunity></JoinCommunity>
    </>
  );
}