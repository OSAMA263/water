import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <Wrapper
      initial={{ opacity: 1 }}
      animate={{ opacity: [0, 1, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <img src="logo.svg" alt="logo" />
    </Wrapper>
  );
}

const Wrapper = tw(motion.div)`
w-full
h-dvh
bg-Abyss
flex
items-center
justify-center
`;
