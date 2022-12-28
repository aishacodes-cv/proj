import * as React from "react"
import { SVGProps } from "react"

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.28 13.283h-2.222V9.802c0-.83-.016-1.899-1.158-1.899-1.158 0-1.334.904-1.334 1.838v3.542H6.344V6.125h2.133V7.1h.03c.298-.562 1.023-1.156 2.106-1.156 2.25 0 2.667 1.482 2.667 3.41v3.929ZM3.835 5.146a1.288 1.288 0 0 1-1.072-2.008 1.29 1.29 0 1 1 1.071 2.008Zm1.113 8.137H2.722V6.125H4.95v7.158ZM14.392.5H1.608C.993.5.5.983.5 1.58v12.84c0 .597.495 1.08 1.107 1.08h12.781c.612 0 1.112-.483 1.112-1.08V1.58C15.5.984 15 .5 14.388.5h.003Z"
      fill="#1B734F"
    />
  </svg>
)

export default LinkedInIcon
