import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components";

export default function Header() {
  return (
    <header className="bg-Abyss p-8 z-50 fixed w-full top-0 border-b">
      <Navbar>
        {/* logo */}
        <div className="flex gap-2 items-center">
          <h2>logo</h2>
        </div>
        {/* navigation links */}
        <ul className="flex itmes-center gap-x-7 text-white">
          {nav_links.map(({ url, link }) => (
            <li key={link}>
              <NavLink to={url}>{link}</NavLink>
            </li>
          ))}
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

const nav_links = [
  {
    link: "Home",
    url: "/",
  },
  {
    link: "About",
    url: "/about",
  },
  {
    link: "Work",
    url: "/work",
  },
  {
    link: "Blog",
    url: "/blog",
  },
];
