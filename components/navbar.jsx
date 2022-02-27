import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
import Link from "next/link";
import { useContext } from "react";
import { NavContext } from "../contexts/navContext";

function Navbar() {
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
    setBlogVisibile,
    ContactVisibile,
    setContactVisibile
  ] = useContext(NavContext);

  return (
    <nav>
      <div className="logo">
        <Image src="/villa_azzur_logo.png" alt="Logo" layout="fill" />
      </div>
      <ul className="navlist">
        <li>
          <Link href="#home">
            <a className={HomeVisibile ? "active" : null}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#about" replace>
            <a className={AboutVisibile ? "active" : null}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/#todays-special" replace>
            <a className={SpecialVisibile ? "active" : null}>Todays Special</a>
          </Link>
        </li>
        <li>
          <Link href="/#menu" replace>
            <a className={MenuVisibile ? "active" : null}>Menu</a>
          </Link>
        </li>
        <li>
          <Link href="#reservation" replace>
            <a className={ReservationVisibile ? "active" : null}>Reservation</a>
          </Link>
        </li>
        <li>
          <Link href="#team">
            <a className={TeamVisibile ? "active" : null}>Team</a>
          </Link>
        </li>

        <li>
          <Link href="#blog">
            <a className={BlogVisibile ? "active" : null}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="#gallery">
            <a className={GalleryVisibile ? "active" : null}>Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className={ContactVisibile ? "active" : null}>Contact</a>
          </Link>
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
