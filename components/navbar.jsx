import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/villa_azzur_logo.png" alt="Logo" layout="fill" />
      </div>
      <ul className="navlist">
        <li>
          <a href="" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Todays Special</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservation</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">Gallery</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <AiOutlineSearch />
        </li>

        <li>
          <BsHandbagFill />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
