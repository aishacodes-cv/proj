import * as React from "react";
import {SVGProps} from "react";

type Props = {bg?: string; color?: string} & React.SVGProps<SVGSVGElement>;

const DescriptionIcon = (props: Props) => (
  <svg
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 13H17M1 1H17H1ZM1 7H17H1Z"
      stroke={props.color || "#4D5C68"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DescriptionIcon;
