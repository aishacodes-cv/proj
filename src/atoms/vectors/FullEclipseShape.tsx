import * as React from "react"
import { SVGProps } from "react"

const FullEclipse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={87}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M87 43.5a43.5 43.5 0 1 0-87 0h87Z" fill={props.color || "#FBE4CB"} />
  </svg>
)

export default FullEclipse
