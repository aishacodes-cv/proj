import * as React from "react"
import { SVGProps } from "react"

const SmileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      fill="#6F767E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.016 13.084a1 1 0 0 1 1.316.516 4.001 4.001 0 0 0 7.336 0 1 1 0 0 1 1.832.8 6.001 6.001 0 0 1-11 0 1 1 0 0 1 .516-1.316Z"
      fill="#6F767E"
    />
    <path
      d="M9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill="#6F767E"
    />
  </svg>
)

export default SmileIcon
