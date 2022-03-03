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
import { useState } from "react";

export async function getStaticProps(context) {
  let BlogsData = await fetch(
    "https://public-api.wordpress.com/rest/v1.1/sites/villaazzur.wordpress.com/posts/"
  ).then((res) => res.json());
  const blogPosts = BlogsData.posts;
  return {
    props: { blogPosts },
    revalidate: 1
  };
}

export default function Home({ blogPosts }) {
  const [MenuClick, setMenuClick] = useState(false);
  console.log(blogPosts);
  return (
    <>
      <Slider />
      <Navbar MenuClick={MenuClick} setMenuClick={setMenuClick} />
      <About MenuClick={MenuClick} />
      <Special />
      <Menu />
      <Reservation />
      <Team />
      <Client />
      <Blog blogPosts={blogPosts} />
      <Gallery />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}
