import * as React from "react"
import { SVGProps } from "react"

const ForwardArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.167 4.817h-10M7.133.801l4.034 4.016-4.034 4.017"
      stroke="#0D9E63"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ForwardArrowIcon
