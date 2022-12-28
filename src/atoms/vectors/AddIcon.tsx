import * as React from "react"
import { SVGProps } from "react"

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.906.333H4.094C1.837.333.334 1.946.334 4.262v5.476c0 2.317 1.5 3.928 3.76 3.928h5.812c2.26 0 3.76-1.61 3.76-3.928V4.262c0-2.318-1.5-3.929-3.76-3.929Zm-5.812.93h5.812c1.731 0 2.83 1.18 2.83 2.999v5.476c0 1.818-1.099 2.998-2.83 2.998H4.094c-1.732 0-2.83-1.18-2.83-2.998V4.262c0-1.816 1.102-2.999 2.83-2.999ZM7 4.257c.235 0 .43.175.46.402l.005.063v1.807h1.809a.465.465 0 0 1 .063.926l-.063.004H7.465v1.807a.465.465 0 0 1-.926.063l-.004-.063V7.459H4.726a.465.465 0 0 1-.063-.926l.063-.004h1.809V4.722c0-.257.208-.465.465-.465Z"
      fill="#676767"
    />
  </svg>
)

export default AddIcon