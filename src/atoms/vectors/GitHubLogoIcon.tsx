import * as React from "react"
import { SVGProps } from "react"

const GitHubLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 .667C4.398.667.667 4.386.667 8.975c0 3.67 2.387 6.783 5.699 7.882.417.076.568-.18.568-.4 0-.197-.006-.72-.01-1.413-2.319.502-2.808-1.114-2.808-1.114-.378-.96-.925-1.215-.925-1.215-.757-.515.057-.505.057-.505.836.058 1.276.856 1.276.856.744 1.27 1.951.903 2.425.69.077-.536.292-.903.53-1.11-1.85-.21-3.796-.923-3.796-4.106 0-.907.325-1.65.858-2.23-.086-.21-.372-1.054.082-2.197 0 0 .7-.224 2.291.851A8.005 8.005 0 0 1 9 4.684a7.99 7.99 0 0 1 2.087.28c1.59-1.076 2.289-.852 2.289-.852.455 1.143.168 1.988.083 2.198.534.58.857 1.323.857 2.23 0 3.19-1.95 3.893-3.805 4.1.3.255.565.762.565 1.537 0 1.11-.01 2.006-.01 2.279 0 .222.15.48.573.4 3.309-1.1 5.694-4.212 5.694-7.882C17.333 4.386 13.602.667 9 .667Z"
      fill="#1B734F"
    />
  </svg>
)

export default GitHubLogoIcon
