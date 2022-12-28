import * as React from "react"
import { SVGProps } from "react"

const AddFileIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10l.01.01a3 3 0 0 1 1.869.869L20.12 5.12a3 3 0 0 1 .868 1.868L21 7v12Zm-3 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9v2a2 2 0 0 0 2 2h2v11a1 1 0 0 1-1 1Z"
      fill="#6F767E"
    />
    <path
      d="M13 10a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z"
      fill="#6F767E"
    />
  </svg>
)

export default AddFileIcon