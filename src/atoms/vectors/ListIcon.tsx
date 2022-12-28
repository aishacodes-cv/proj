import * as React from "react";
import {SVGProps} from "react";

const ListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="23"
    height="18"
    viewBox="0 0 23 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.5664 1.5H8.46395M21.5664 9H17.1569H8.46395M21.5664 16.5H12.7475H8.46395M1.40918 2.25V0.75H3.17269V2.25H1.40918ZM1.40918 9.75V8.25H3.17269V9.75H1.40918ZM1.40918 17.25V15.75H3.17269V17.25H1.40918Z"
      stroke={props.color || "#4D5C68"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ListIcon;
