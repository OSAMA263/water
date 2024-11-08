import { Link, NavLink } from "react-router-dom";
import tw from "tailwind-styled-components";
import { nav_links } from "./nav_links";

export default function Header() {
  return (
    <header className="bg-Abyss px-8 py-4 z-50 fixed w-full top-0 border-b border-Ocean">
      <Navbar>
        {/* logo */}
        <Link
          aria-label="home"
          to="/"
          className="text-Gray [&>img]:hover:rotate-90 text-lg font-semibold flex gap-2 items-center"
        >
          <img src="logo.svg" className="w-[15%]" alt="logo" />
          <h1>water.</h1>
        </Link>
        {/* navigation links */}
        <ul className="flex items-center gap-x-10 text-lg text-white">
          {nav_links.map(({ url, link }) => (
            <li key={link}>
              <NavLink to={url}>{link}</NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/contact"
              className="main-btn inline-block !rounded-md !py-2 border border-Sky"
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </header>
  );
}

const Navbar = tw.nav`
w-[80%]
mx-auto
flex
justify-between 
items-center
`;
