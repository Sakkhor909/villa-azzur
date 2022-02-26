import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
function Navbar() {
  const route = useRouter();

  return (
    <nav>
      <div className="logo">
        <Image src="/villa_azzur_logo.png" alt="Logo" layout="fill" />
      </div>
      <ul className="navlist">
        <li>
          <Link href="#home">
            <a className={route.asPath == "/#home" ? "active" : null}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#about" replace>
            <a className={route.asPath == "/#about" ? "active" : null}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/#todays-special" replace>
            <a className={route.asPath == "/#todays-special" ? "active" : null}>
              Todays Special
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#menu" replace>
            <a className={route.asPath == "/#menu" ? "active" : null}>Menu</a>
          </Link>
        </li>
        <li>
          <Link href="#reservation" replace>
            <a className={route.asPath == "/#reservation" ? "active" : null}>
              Reservation
            </a>
          </Link>
        </li>
        <li>
          <Link href="#team">
            <a className={route.asPath == "/#team" ? "active" : null}>Team</a>
          </Link>
        </li>
        <li>
          <Link href="#gallery">
            <a className={route.asPath == "/#gallery" ? "active" : null}>
              Gallery
            </a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className={route.asPath == "/#contact" ? "active" : null}>
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href="#blog">
            <a className={route.asPath == "/#blog" ? "active" : null}>Blog</a>
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
