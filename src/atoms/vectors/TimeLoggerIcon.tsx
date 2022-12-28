import * as React from "react";
import { SVGProps } from "react";

const TimeLoggerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10Zm0 1.5a8.5 8.5 0 0 1 8.5 8.5 8.5 8.5 0 0 1-8.5 8.5A8.5 8.5 0 0 1 3.5 12 8.5 8.5 0 0 1 12 3.5Zm.405 4.245a.75.75 0 0 0-1.494.102v4.847l.009.112a.75.75 0 0 0 .357.532l3.77 2.249.091.046a.75.75 0 0 0 .938-.306l.046-.09a.75.75 0 0 0-.306-.938l-3.405-2.032v-4.42l-.006-.102Z"
      fill={props.color || "#343535"}
    />
  </svg>
);

export default TimeLoggerIcon;
