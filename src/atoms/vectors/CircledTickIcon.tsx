import * as React from "react"
import { SVGProps } from "react"

const CircledTickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill={props.fill || 'none'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke={props.stroke || "#4D5C68"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CircledTickIcon
