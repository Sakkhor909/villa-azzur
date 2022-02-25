import Slider from "../components/slider";
import Navbar from "../components/navbar";
import About from "../components/about";
import Special from "../components/Special";
import Menu from "../components/menu";
import Map from "../components/map";
import Footer from "../components/footer";
export default function Home() {
  return (
    <>
      <Slider />
      <Navbar />
      <About />
      <Special />
      <Menu />
      <Map />
      <Footer />
    </>
  );
}
