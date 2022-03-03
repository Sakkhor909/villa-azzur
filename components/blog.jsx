import { SimpleGrid } from "@mantine/core";
import Image from "next/image";
import { useRef, useEffect, useContext } from "react";
import { NavContext } from "../contexts/navContext";
import { CSSTransition } from "react-transition-group";
import { useInViewport } from "react-in-viewport";
function Blog({ blogPosts }) {
  const BlogRef = useRef();
  const blogSectionRef = useRef();
  // defining inViewport
  const { inViewport } = useInViewport(BlogRef, {
    threshold: 0.3
  });
  const {
    inViewport: blogSectionInViewport,
    enterCount: blogSectionInViewportCount
  } = useInViewport(blogSectionRef);
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
    setBlogVisibile(inViewport);
  }, [setBlogVisibile, inViewport]);
  return (
    <div className="blog-section" ref={BlogRef}>
      <div className="heading">Blogs</div>
      <div className="line"></div>
      <CSSTransition
        in={blogSectionInViewport && blogSectionInViewportCount === 1}
        timeout={1500}
        classNames="slide-up"
      >
        <SimpleGrid cols={4} spacing="lg" ref={blogSectionRef}>
          {blogPosts.map((post) => {
            function createMarkup() {
              return { __html: post.content };
            }
            return (
              <a className="container" key={post.ID}>
                <div className="image-container">
                  <div className="date">12 jun</div>
                  <Image src="/food1.jpg" alt="Blog image" layout="fill" />
                  <div className="tag">My Food</div>
                </div>
                <h5 className="title">{post.title}</h5>
                <div
                  className="description"
                  dangerouslySetInnerHTML={createMarkup()}
                ></div>
                <div className="card-footer">
                  <div className="category">Food</div>
                  <div className="time">2 minutes</div>
                </div>
              </a>
            );
          })}
        </SimpleGrid>
      </CSSTransition>
      <button className="view-more-btn">View More</button>
    </div>
  );
}

export default Blog;
