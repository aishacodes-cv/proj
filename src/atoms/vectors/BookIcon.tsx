import * as React from "react"
import { SVGProps } from "react"

const BookIcon
 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 2.253C11.168 1.477 12.754 1 14.5 1c1.747 0 3.332.477 4.5 1.253v13C17.832 14.477 16.247 14 14.5 14c-1.746 0-3.332.477-4.5 1.253m0-13v13-13Zm0 0C8.832 1.477 7.246 1 5.5 1S2.168 1.477 1 2.253v13C2.168 14.477 3.754 14 5.5 14s3.332.477 4.5 1.253v-13Z"
      stroke={props.color || "#1B734F"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default BookIcon

