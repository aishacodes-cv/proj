import * as React from "react"
import { SVGProps } from "react"

const CommentIcon = (props: SVGProps<SVGSVGElement>) => (
 <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12-5.373 12-12 12S2 20.627 2 14Z"
      fill="#2A85FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.333 10a2 2 0 0 1 2-2h9.334a2 2 0 0 1 2 2v6.667a2 2 0 0 1-2 2h-7.092a.666.666 0 0 0-.427.154L9.52 20.178c-.868.723-2.187.106-2.187-1.025V10Zm3.334 2c0-.368.298-.667.666-.667h5.334a.667.667 0 0 1 0 1.334h-5.334a.667.667 0 0 1-.666-.667Zm.666 2a.667.667 0 0 0 0 1.333H14A.667.667 0 1 0 14 14h-2.667Z"
      fill="#fff"
    />
    <path
      d="M14 24C8.477 24 4 19.523 4 14H0c0 7.732 6.268 14 14 14v-4Zm10-10c0 5.523-4.477 10-10 10v4c7.732 0 14-6.268 14-14h-4ZM14 4c5.523 0 10 4.477 10 10h4c0-7.732-6.268-14-14-14v4Zm0-4C6.268 0 0 6.268 0 14h4C4 8.477 8.477 4 14 4V0Z"
      fill="#fff"
    />
  </svg>
)

export default CommentIcon