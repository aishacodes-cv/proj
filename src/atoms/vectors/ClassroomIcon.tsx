import * as React from "react";
import { SVGProps } from "react";

const ClassroomIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.573 4.5H6.304C3.74 4.5 2 6.22 2 8.688v7.015c0 2.469 1.74 4.188 4.304 4.188h6.27c2.417 0 4.107-1.535 4.287-3.784l2.647 1.082.133.048A1.808 1.808 0 0 0 22 15.516v-6.64l-.005-.14a1.808 1.808 0 0 0-2.486-1.534L16.86 8.284c-.18-2.25-1.866-3.784-4.288-3.784Zm2.804 4.868v6.335c0 1.634-1.068 2.688-2.804 2.688H6.304c-1.74 0-2.804-1.051-2.804-2.688V8.688C3.5 7.051 4.564 6 6.304 6h6.27c1.74 0 2.803 1.052 2.803 2.688v.68Zm1.5 5.125V9.898l3.199-1.307.067-.02c.181-.029.357.11.357.306v6.638l-.008.07a.308.308 0 0 1-.417.215l-3.198-1.307Z"
      fill={props.color || "#343535"}
    />
  </svg>
);

export default ClassroomIcon;
