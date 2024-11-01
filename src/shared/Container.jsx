import tw from "tailwind-styled-components"

export default function Container({children,className}) {
  return (
    <Wrapepr className={className??""}>{children}</Wrapepr>
  )
}

const Wrapepr=tw.div`
w-[85%]
mx-auto
`