import * as React from "react"
import { SVGProps } from "react"

const ForwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={9}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m.728 9.128 5.382-3.24v-.126L.728 2.54V.524l7.344 4.572v1.476L.728 11.144V9.128Z"
      fill="#4D5C68"
    />
  </svg>
)

export default ForwardIcon