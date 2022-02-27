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
import Contact from "../components/contact";
import Map from "../components/map";
import Footer from "../components/footer";

// Need to do startup animation

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
      <Contact />
      <Map />
      <Footer />
    </>
  );
}
