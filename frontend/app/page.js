import JoinCommunity from "./components/Contact";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero></Hero>

      <JoinCommunity></JoinCommunity>
    
      <Gallery></Gallery>
    
      <About></About>
    </>
  );
}