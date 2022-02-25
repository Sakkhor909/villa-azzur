import Image from "next/image";

function Special() {
  return (
    <div className="Special-section">
      <div className="heading s-heading">Today&apos;s Special</div>
      <div className="line"></div>
      <div className="grid-container">
        {foods.map((food, index) => {
          return (
            <div className="grid-item" key={index}>
              <div className="image-container">
                <Image src={food.img} alt="Steak" layout="fill" />
              </div>
              <div className="card-info">
                <h2 className="c-heading">{food.name}</h2>
                <div className="sub-heading">{food.description}</div>
                <div className="price">{food.price}</div>
                <div className="category">{food.category}</div>
                <button className="cart-btn">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Special;

const foods = [
  {
    name: "TOMAHOK",
    img: "/steak4.jpg",
    description: "Mah potato with sauteed vegetable",
    price: "TK 2095",
    category: "Steak"
  },
  {
    name: "RIB-EYE STEAK",
    img: "/steak3.jpg",
    description: "French fry with sauteed vegetable",
    price: "TK 1295",
    category: "Steak"
  },
  {
    name: "T-BONE STEAK",
    img: "/steak1.jpg",
    description: "Jacket potato with sauteed vegetable",
    price: "TK 1595",
    category: "Steak"
  },
  {
    name: "MIXED GRILLED PLATTER",
    img: "/steak2.jpg",
    description: "Rice with vegetable",
    price: "TK 2295",
    category: "Platter"
  }
];
