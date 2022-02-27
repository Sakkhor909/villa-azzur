import { Tabs } from "@mantine/core";
import { SimpleGrid } from "@mantine/core";
import Image from "next/image";
function Gallery() {
  return (
    <>
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
    </>
  );
}

export default Gallery;
