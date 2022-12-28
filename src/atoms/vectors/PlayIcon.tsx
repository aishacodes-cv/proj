import * as React from "react";
import {SVGProps} from "react";

const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.00018 9.99941V6.43941C1.00018 2.01941 4.13018 0.209407 7.96018 2.41941L11.0502 4.19941L14.1402 5.97941C17.9702 8.18941 17.9702 11.8094 14.1402 14.0194L11.0502 15.7994L7.96018 17.5794C4.13018 19.7894 1.00018 17.9794 1.00018 13.5594V9.99941Z"
      stroke={props.color || "white"}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlayIcon;
