import tw from "tailwind-styled-components";

export default function SlideingSection(props) {
  const { active, content, i, setActive } = props;

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
      style={{ left: active[i] ? content.open : content.close }}
      onClick={() => handleActiveSlide(i)}
    >
      {/* large title letter */}
      <div className="flex items-end">
        <div className="text-7xl">D</div>
        <div>ev</div>
      </div>
    </Slider>
  );
}

const Slider = tw.div`
w-[85%]
bg-abyss
border-l
border-b
border-l-gray-800
border-b-gray-800
top-0
absolute
h-full
flex
items-center
gap-10
px-8
transition-all
duration-500
`;
