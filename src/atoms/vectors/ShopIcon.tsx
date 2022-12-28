import * as React from "react"
import { SVGProps } from "react"

const ShopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12-5.373 12-12 12S2 20.627 2 14Z"
      fill="#83BF6E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 7.334a2.667 2.667 0 0 0-2.667 2.667h-.9a2 2 0 0 0-1.985 1.752l-.834 6.666A2 2 0 0 0 9.6 20.667H18.4a2 2 0 0 0 1.985-2.248l-.834-6.666A2 2 0 0 0 17.568 10h-.901A2.667 2.667 0 0 0 14 7.334Zm1.333 2.667a1.333 1.333 0 1 0-2.666 0h2.666Z"
      fill="#FCFCFC"
    />
    <path
      d="M14 24C8.477 24 4 19.523 4 14H0c0 7.732 6.268 14 14 14v-4Zm10-10c0 5.523-4.477 10-10 10v4c7.732 0 14-6.268 14-14h-4ZM14 4c5.523 0 10 4.477 10 10h4c0-7.732-6.268-14-14-14v4Zm0-4C6.268 0 0 6.268 0 14h4C4 8.477 8.477 4 14 4V0Z"
      fill="#fff"
    />
  </svg>
)

export default ShopIcon
