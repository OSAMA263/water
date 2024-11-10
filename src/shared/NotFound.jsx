import tw from "tailwind-styled-components";
import { FaRegFaceDizzy } from "react-icons/fa6";

export default function NotFound() {
  return (
    <Container>
      <span className="text-4xl">
        <FaRegFaceDizzy />
      </span>
      Not an available page
    </Container>
  );
}

const Container = tw.div`
h-dvh
flex
flex-col
gap-y-4
items-center
justify-center
text-white
`;
