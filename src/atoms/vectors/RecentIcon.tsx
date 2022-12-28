import * as React from "react"
import { SVGProps } from "react"

const RecentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 .001c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Zm0 1.5a8.5 8.5 0 0 1 8.5 8.5 8.5 8.5 0 0 1-8.5 8.5 8.5 8.5 0 0 1-8.5-8.5 8.5 8.5 0 0 1 8.5-8.5Zm.405 4.245a.75.75 0 0 0-1.494.101v4.847l.009.112a.75.75 0 0 0 .357.533l3.77 2.248.091.047a.75.75 0 0 0 .938-.306l.046-.091a.75.75 0 0 0-.306-.938l-3.405-2.031v-4.42l-.006-.102Z"
      fill={props.color || "#200E32"}
    />
  </svg>
)

export default RecentIcon