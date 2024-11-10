import tw from "tailwind-styled-components"

export default function Container({children,className}) {
  return (
    <Wrapepr className={className??""}>{children}</Wrapepr>
  )
}

const Wrapepr=tw.div`
xl:w-[85%]
w-[90%]
mx-auto
`