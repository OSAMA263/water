import tw from "tailwind-styled-components"

export default function Container({children,cls}) {
  return (
    <Wrapepr className={cls??""}>{children}</Wrapepr>
  )
}

const Wrapepr=tw.div`
w-[90%]
mx-auto
`