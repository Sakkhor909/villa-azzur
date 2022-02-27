import { SimpleGrid } from "@mantine/core";
import Image from "next/image";
import { useRef, useEffect, useContext } from "react";
import useElementView from "../hooks/useElementView";
import { NavContext } from "../contexts/navContext";
function Blog() {
  const BlogRef = useRef();
  const isVisible = useElementView(BlogRef);
  const [
    HomeVisibile,
    setHomeVisibile,
    AboutVisibile,
    setAboutVisibile,
    SpecialVisibile,
    setSpecialVisibile,
    MenuVisibile,
    setMenuVisibile,
    ReservationVisibile,
    setReservationVisibile,
    TeamVisibile,
    setTeamVisibile,
    GalleryVisibile,
    setGalleryVisibile,
    BlogVisibile,
    setBlogVisibile
  ] = useContext(NavContext);
  useEffect(() => {
    setBlogVisibile(isVisible);
  }, [setBlogVisibile, isVisible]);
  return (
    <div className="blog-section" ref={BlogRef}>
      <div className="heading">Blogs</div>
      <div className="line"></div>
      <SimpleGrid cols={4} spacing="lg">
        <a className="container">
          <div className="image-container">
            <div className="date">12 jun</div>
            <Image src="/food1.jpg" alt="Blog image" layout="fill" />
            <div className="tag">My Food</div>
          </div>
          <h5 className="title">Food recipe</h5>
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nihil
            reiciendis neque optio dolores, sunt soluta.
          </div>
          <div className="card-footer">
            <div className="category">Food</div>
            <div className="time">2 minutes</div>
          </div>
        </a>
        <a className="container">
          <div className="image-container">
            <div className="date">12 jun</div>
            <Image src="/food1.jpg" alt="Blog image" layout="fill" />
            <div className="tag">My Food</div>
          </div>
          <h5 className="title">Food recipe</h5>
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nihil
            reiciendis neque optio dolores, sunt soluta.
          </div>
          <div className="card-footer">
            <div className="category">Food</div>
            <div className="time">2 minutes</div>
          </div>
        </a>
        <a className="container">
          <div className="image-container">
            <div className="date">12 jun</div>
            <Image src="/food1.jpg" alt="Blog image" layout="fill" />
            <div className="tag">My Food</div>
          </div>
          <h5 className="title">Food recipe</h5>
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nihil
            reiciendis neque optio dolores, sunt soluta.
          </div>
          <div className="card-footer">
            <div className="category">Food</div>
            <div className="time">2 minutes</div>
          </div>
        </a>
        <a className="container">
          <div className="image-container">
            <div className="date">12 jun</div>
            <Image src="/food1.jpg" alt="Blog image" layout="fill" />
            <div className="tag">My Food</div>
          </div>
          <h5 className="title">Food recipe</h5>
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nihil
            reiciendis neque optio dolores, sunt soluta.
          </div>
          <div className="card-footer">
            <div className="category">Food</div>
            <div className="time">2 minutes</div>
          </div>
        </a>
      </SimpleGrid>
      <button className="view-more-btn">View More</button>
    </div>
  );
}

export default Blog;
