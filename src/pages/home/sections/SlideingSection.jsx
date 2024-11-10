import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdArrowOutward, MdArrowForward, MdArrowBack } from "react-icons/md";
import { swiper_imgs_navigatoer } from "../data";
import SlideElement from "../../../components/SlideElement";
import { useMediaQuery } from "@chakra-ui/react";

export default function SlideingSection(props) {
  const { active, i, setActive, content } = props;
  const { title, header_text, text } = content;
  const [SM] = useMediaQuery("(max-width: 1024px)");

  const handleActiveSlide = (i) => {
    const newActiveState = active.map((status, ind) =>
      ind === i ? !status : status
    ); //changing only the ind 0 to true
    setActive(newActiveState);

    if (i === 0) {
      setActive([true]);
    } else if (i === 1) {
      setActive([true, true]);
    } else if (i === 2) {
      setActive([true, true, true]);
    } else {
      setActive([true, true, true, true]);
    }
  };

  return (
    <Slider
      $i={i}
      $active={active.length - 1}
      style={{ left: !SM ? (active[i] ? content.open : content.close) : null }}
      onClick={() => {
        !SM ? handleActiveSlide(i) : null;
      }}
    >
      {/* left large title */}
      <SlideElement className="lg:col-span-2 w-fit col-span-auto">
        <div className="flex items-baseline font-semibold">
          <div className="text-[20vw] uppercase">{title.split("")[0]}</div>
          <div className="-ml-[2vw] text-[2vw]">{title.split("").slice(1)}</div>
        </div>
      </SlideElement>
      {/* right sliders content */}
      <SlideElement className="lg:col-span-4 col-span-4">
        <div className="space-y-8 text-pretty">
          <h1 className="sm:text-7xl text-5xl text-white leading-none">{header_text}</h1>
          <p className="text-Gray">{text}</p>
          <Link
            aria-label="blog link"
            className="font-semibold hover:text-Gray items-center flex place-self-center [&>svg]:hover:ml-2 text-white"
          >
            Discover Our Work <MdArrowOutward />
          </Link>
          {/* images swiper */}
          {!SM && <ImagesSwiper />}
        </div>
      </SlideElement>
    </Slider>
  );
}
// swiper images
const ImagesSwiper = () => {
  const swiperProps = {
    slidesPerView: 2,
    loop: true,
    speed: 500,
    grabCursor: true,
    navigation: { nextEl: "#next", prevEl: "#prev" },
    modules: [Navigation],
  };

  return (
    <>
      <Swiper {...swiperProps} className="!z-0 [&>.swiper-wrapper]:gap-10">
        {swiper_imgs_navigatoer.map(({ highlight, text, img }, i) => (
          <SwiperSlide className="space-y-4" key={i}>
            <img className="rounded-2xl w-full" src={img} alt={i + "img"} />
            <div>
              <span className="text-white font-bold">{highlight}</span>
              <span className="text-Gray"> {text}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-4 items-center [&>button:hover]:text-white">
        <button aria-label="prev image" id="prev">
          <MdArrowBack />
        </button>
        <button aria-label="next image" id="next">
          <MdArrowForward />
        </button>
      </div>
    </>
  );
};

const Slider = tw.div`
${({ $active, $i }) =>
  $active === $i ? "text-Ocean" : "text-Gray cursor-pointer hover:text-Sky"}
w-[85%]
max-lg:mx-auto
lg:border-l
border-b
border-t
border-gray-700
bg-Abyss
lg:absolute
sticky
top-0
h-full
max-lg:h-dvh
max-lg:flex
max-lg:text-center
amx-lg:gap-y-4
flex-col
grid
grid-cols-6
items-center
justify-center
pl-2
transition-all
duration-1000
ease-[cubic-bezier(0.66,0.03,0,0.99)]
`;
