import { Link, NavLink, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import { nav_links } from "./nav_links";
import { Slide, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [SM] = useMediaQuery("(max-width: 1024px)");
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);
  return (
    <header className="bg-Abyss px-8 py-4 z-[696969] fixed w-full top-0 border-b border-Ocean">
      <NavWrapperLG>
        {/* logo */}
        <Link
          aria-label="home"
          to="/"
          className="text-Gray [&>img]:hover:rotate-90 text-lg font-semibold flex gap-2 items-center"
        >
          <img src="logo.svg" className="w-[15%]" alt="logo" />
          <h1>water.</h1>
        </Link>
        {/* large screen navigation links */}
        {!SM && <Navlinks />}
        {/* toggle nav links button */}
        <button
          className="text-white text-4xl lg:hidden"
          aria-label="toggle nav links"
          onClick={() => onToggle()}
        >
          <IoMenu/>
        </button>
      </NavWrapperLG>
      {/* small screen navigation links */}
      {SM && (
        <Slide direction="top" className="!h-dvh !z-[694]" in={isOpen}>
          <div
            onClick={() => onClose()}
            className="h-full bg-Abyss bg-opacity-75"
          ></div>
          <NavWrapperSM>
            <Navlinks />
          </NavWrapperSM>
        </Slide>
      )}
    </header>
  );
}

const Navlinks = () => {
  return (
    <NavList>
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
    </NavList>
  );
};

const NavList = tw.ul`
flex
max-lg:flex-col
lg:items-center
gap-10
text-lg
text-white
`;

const NavWrapperLG = tw.nav`
w-[80%]
mx-auto
flex
justify-between 
items-center
z-[696945]
relative
`;

const NavWrapperSM = tw.nav`
px-[10%]
bg-Abyss
absolute
w-full
top-0
h-[50vh]
z-[50]
flex
items-center
`;
