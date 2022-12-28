import * as React from "react"
import { SVGProps } from "react"

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 13h16M1 1h16H1Zm0 6h16H1Z"
      stroke="#5D6D73"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default MenuIcon
