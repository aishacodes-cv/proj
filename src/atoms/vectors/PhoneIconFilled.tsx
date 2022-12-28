import * as React from "react"
import { SVGProps } from "react"

const PhoneIconFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 1a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V15a1 1 0 0 1-1 1h-2C5.82 16 0 10.18 0 3V1Z"
      fill="#1B734F"
    />
  </svg>
)

export default PhoneIconFilled
