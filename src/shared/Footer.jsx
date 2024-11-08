import { nav_links } from "./nav_links";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../shared/Container";
import SlideElement from "../components/SlideElement";
import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-Abyss">
      {/* border top line */}
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="bg-Ocean h-[1px]"
      ></motion.div>
      <Container className={"py-20 space-y-10"}>
        <SlideElement>
          <div className="flex justify-between items-center">
            {/* getstarted */}
            <div className="space-y-4 w-1/2 text-balance">
              <Link
                aria-label="home"
                to="/"
                className="text-white [&>img]:hover:rotate-90 text-lg font-semibold flex gap-2 items-center"
              >
                <img
                  loading="lazy"
                  src="logo.svg"
                  className="w-[5%]"
                  alt="logo"
                />
                <h1>water.</h1>
              </Link>
              <p className="text-Gray">
                Meticulously crafted with exceptional care and boundless
                creativity, designed to elevate your brand to new heights.
              </p>
              <button
                className="main-btn !px-4 !bg-Ocean !py-2 !rounded-md"
                aria-label="get started"
              >
                Get Started
              </button>
            </div>
            {/* navlinks footer */}
            <ul className="flex items-center gap-x-10 text-lg text-white">
              {nav_links.map(({ url, link }) => (
                <li key={link}>
                  <Link to={url}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </SlideElement>
        {/* social links */}{" "}
        <SlideElement>
          <div className="flex items-center justify-between">
            <h1 className="text-Gray">
              Made By{" "}
              <Link
                className="text-Sky"
                target="_blank"
                to="https://github.com/OSAMA263"
              >
                @Osama263
              </Link>
            </h1>
            <div className="flex items-center gap-2">
              {logos.map((logo, i) => (
                <span
                  key={i}
                  className="text-white [&>svg]:hover:text-Ocean text-3xl cursor-pointer"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </SlideElement>
      </Container>
    </footer>
  );
}

const logos = [
  <BiLogoFacebookSquare key="facebook" />,
  <BiLogoInstagramAlt key="instagram" />,
  <BiLogoLinkedinSquare key="linkedin" />,
  <BiLogoYoutube key="youtube" />,
];
