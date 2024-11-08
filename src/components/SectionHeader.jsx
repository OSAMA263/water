import tw from "tailwind-styled-components";
import SlideElement from "./SlideElement";

export default function SectionHeader({ title, text, className }) {
  return (
    <Section className={className}>
      <SlideElement>
        <img src="logo.svg" alt="logo" />
        <h1 className="text-6xl leading-none">{title}</h1>
        <p>
          {text ??
            "Merge visionary thinking with unparalleled excellence. Achieve extraordinary results through a seamless blend of creativity and strategic insight."}
        </p>
      </SlideElement>
    </Section>
  );
}

const Section = tw.div`
font-semibold
flex
flex-col
items-center
gap-y-8
text-center
text-Gray
w-1/2
mx-auto
py-12
`;