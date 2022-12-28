import * as React from "react"
import { SVGProps } from "react"

const HalfEclipse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M29 0A14.5 14.5 0 1 1 0 0h29Z" fill={props.color || "#F9D4AC"} />
  </svg>
)

export default HalfEclipse
