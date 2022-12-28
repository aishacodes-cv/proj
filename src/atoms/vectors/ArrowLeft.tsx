import * as React from "react";
import {SVGProps} from "react";

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 8H19M8 15L1 8L8 15ZM1 8L8 1L1 8Z"
      stroke={props.color || "#4D5C68"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowLeft;
