import * as React from "react"
import { SVGProps } from "react"

const LikeReactionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12-5.373 12-12 12S2 20.627 2 14Z"
      fill="#FF6A55"
    />
    <path
      d="M13.867 9.476a3.783 3.783 0 0 0-5.418 0 3.929 3.929 0 0 0 0 5.486l4.6 4.687c.522.533 1.38.533 1.903 0l4.599-4.687a3.929 3.929 0 0 0 0-5.486 3.783 3.783 0 0 0-5.418 0 .187.187 0 0 1-.266 0Z"
      fill="#FCFCFC"
    />
    <path
      d="M14 24C8.477 24 4 19.523 4 14H0c0 7.732 6.268 14 14 14v-4Zm10-10c0 5.523-4.477 10-10 10v4c7.732 0 14-6.268 14-14h-4ZM14 4c5.523 0 10 4.477 10 10h4c0-7.732-6.268-14-14-14v4Zm0-4C6.268 0 0 6.268 0 14h4C4 8.477 8.477 4 14 4V0Z"
      fill="#fff"
    />
  </svg>
)

export default LikeReactionIcon
