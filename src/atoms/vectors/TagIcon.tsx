import {SVGProps} from "react";

const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.40488 15.5264L8.93488 20.0564C10.7949 21.9164 13.8149 21.9164 15.6849 20.0564L20.0749 15.6664C21.9349 13.8064 21.9349 10.7864 20.0749 8.91637L15.5349 4.39637C14.5849 3.44637 13.2749 2.93637 11.9349 3.00637L6.93488 3.24637C4.93488 3.33637 3.34488 4.92637 3.24488 6.91637L3.00488 11.9164C2.94488 13.2664 3.45488 14.5764 4.40488 15.5264Z"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.73486 12.2266C11.1156 12.2266 12.2349 11.1073 12.2349 9.72656C12.2349 8.34585 11.1156 7.22656 9.73486 7.22656C8.35415 7.22656 7.23486 8.34585 7.23486 9.72656C7.23486 11.1073 8.35415 12.2266 9.73486 12.2266Z"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13.2349 17.2266L17.2349 13.2266"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TagIcon;
