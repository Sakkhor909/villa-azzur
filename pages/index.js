import Slider from "../components/slider";
import Navbar from "../components/navbar";
import About from "../components/about";
import Special from "../components/Special";
import Menu from "../components/menu";
import Reservation from "../components/Reservation";
import Team from "../components/team";
import Client from "../components/client";
import Gallery from "../components/gallery";
import Blog from "../components/blog";
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
      <Reservation />
      <Team />
      <Client />
      <Blog />
      <Gallery />
      <Map />
      <Footer />
    </>
  );
}
