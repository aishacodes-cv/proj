import * as React from "react";
import {SVGProps} from "react";

type Props = {bg?: string; color?: string} & React.SVGProps<SVGSVGElement>;

const CloseIcon = (props: Props) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1L13 13M1 13L13 1L1 13Z"
      stroke={props.color || "black"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
