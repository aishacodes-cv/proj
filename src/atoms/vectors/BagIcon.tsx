import * as React from "react"
import { SVGProps } from "react"

const BagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 13.755a23.93 23.93 0 0 1-9 1.745c-3.183 0-6.22-.62-9-1.745m9-1.255h.01m3.99-6v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h8Zm-11 14h14a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
      stroke="#1B734F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default BagIcon
