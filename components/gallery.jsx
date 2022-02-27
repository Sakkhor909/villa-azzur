import { Tabs } from "@mantine/core";
import { SimpleGrid } from "@mantine/core";
import Image from "next/image";
import { useRef, useEffect, useContext } from "react";
import useElementView from "../hooks/useElementView";
import { NavContext } from "../contexts/navContext";
function Gallery() {
  const GalleryRef = useRef();
  const isVisible = useElementView(GalleryRef);
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
    setGalleryVisibile
  ] = useContext(NavContext);
  useEffect(() => {
    setGalleryVisibile(isVisible);
  }, [setGalleryVisibile, isVisible]);
  return (
    <div className="gallery-section" ref={GalleryRef}>
      <div>
        <div className="heading">Our Gallery</div>
        <div className="line"></div>
      </div>
      <Tabs className="image-gallery-tab">
        <Tabs.Tab label="All">
          <SimpleGrid cols={4}>
            <div className="image-container">
              <Image src="/rest1.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest2.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest3.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest4.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest5.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest6.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest7.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/food1.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
          </SimpleGrid>
        </Tabs.Tab>
        <Tabs.Tab label="Resturant">
          <SimpleGrid cols={4}>
            <div className="image-container">
              <Image src="/rest1.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest2.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest3.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest4.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest5.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest6.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <Image src="/rest7.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
          </SimpleGrid>
        </Tabs.Tab>
        <Tabs.Tab label="Food">
          <SimpleGrid cols={4}>
            <div className="image-container">
              <Image src="/food1.jpg" alt="Resturant 1" layout="fill" />
              <div className="hover-effect">
                <div className="inner-gal">
                  <div className="location">Location 1</div>
                  <div className="details">Resturant</div>
                </div>
              </div>
            </div>
          </SimpleGrid>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default Gallery;
