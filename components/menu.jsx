import { Tabs } from "@mantine/core";
import Image from "next/image";
import { useRef, useEffect, useContext } from "react";
import { NavContext } from "../contexts/navContext";
import { CSSTransition } from "react-transition-group";
import { useInViewport } from "react-in-viewport";
function Menu() {
  const MenuRef = useRef();
  const titleSectionRef = useRef();
  const tabSectionRef = useRef();
  // defining inViewport
  const { inViewport } = useInViewport(MenuRef, {
    threshold: 0.3
  });
  const {
    inViewport: titleSectionInViewport,
    enterCount: titleSectionInViewportCount
  } = useInViewport(titleSectionRef);
  const {
    inViewport: tabSectionInViewport,
    enterCount: tabSectionInViewportCount
  } = useInViewport(tabSectionRef);
  const [
    HomeVisibile,
    setHomeVisibile,
    AboutVisibile,
    setAboutVisibile,
    SpecialVisibile,
    setSpecialVisibile,
    MenuVisibile,
    setMenuVisibile
  ] = useContext(NavContext);
  useEffect(() => {
    setMenuVisibile(inViewport);
  }, [setMenuVisibile, inViewport]);
  return (
    <div className="menu-section" id="menu" ref={MenuRef}>
      <CSSTransition
        in={titleSectionInViewport && titleSectionInViewportCount === 1}
        timeout={1500}
        classNames="silde-down"
      >
        <div className="title-section" ref={titleSectionRef}>
          <h2 className="heading">Our Menu</h2>
          <div className="line"></div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={tabSectionInViewport && tabSectionInViewportCount === 1}
        timeout={1500}
        classNames="slide-right"
      >
        <Tabs
          variant="outline"
          tabPadding="md"
          className="menu-tab-section"
          ref={tabSectionRef}
        >
          <Tabs.Tab label="Main">
            <div className="grid-container">
              {MainFoods.map((item, index) => {
                return (
                  <div className="grid-item" key={index}>
                    <div className="first-column">
                      <div className="image-container">
                        <Image src={item.img} alt="fried rice" layout="fill" />
                      </div>
                      <div className="food-info">
                        <div className="food-name">{item.name}</div>
                        <div className="food-description">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className="second-column">
                      <div className="food-price">{item.price}</div>
                      <button className="cart-btn">Add to cart</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Tabs.Tab>
          <Tabs.Tab label="Starter">
            <div className="grid-container">
              {MainFoods.map((item, index) => {
                return (
                  <div className="grid-item" key={index}>
                    <div className="first-column">
                      <div className="image-container">
                        <Image src={item.img} alt="fried rice" layout="fill" />
                      </div>
                      <div className="food-info">
                        <div className="food-name">{item.name}</div>
                        <div className="food-description">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className="second-column">
                      <div className="food-price">{item.price}</div>
                      <button className="cart-btn">Add to cart</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Tabs.Tab>
          <Tabs.Tab label="Drinks">
            <div className="grid-container">
              {MainFoods.map((item, index) => {
                return (
                  <div className="grid-item" key={index}>
                    <div className="first-column">
                      <div className="image-container">
                        <Image src={item.img} alt="fried rice" layout="fill" />
                      </div>
                      <div className="food-info">
                        <div className="food-name">{item.name}</div>
                        <div className="food-description">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className="second-column">
                      <div className="food-price">{item.price}</div>
                      <button className="cart-btn">Add to cart</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Tabs.Tab>
        </Tabs>
      </CSSTransition>
    </div>
  );
}

export default Menu;

const MainFoods = [
  {
    name: "Fried Rice",
    img: "/fried_rice.jpg",
    price: "TK 445",
    description: "Fried Rice"
  },
  {
    name: "Tomahok",
    img: "/steak4.jpg",
    price: "TK 2095",
    description: "Mah potato with sauteed vegetable"
  },
  {
    name: "Grilled Prawn",
    img: "/grilled_prawn.jpg",
    price: "TK 645",
    description: "With mushroom sauce."
  },
  {
    name: "Rib-Eye Steak",
    img: "/steak3.jpg",
    price: "TK 1295",
    description: "French fry with sauteed vegetable"
  },
  {
    name: "Creamy White Pasta",
    img: "/white_pasta.jpg",
    price: "TK 445",
    description: "White sauce pasta"
  },
  {
    name: "T-Bone Steak",
    img: "/steak1.jpg",
    price: "TK 1595",
    description: "Jacket potato with sauteed vegetable."
  }
];
