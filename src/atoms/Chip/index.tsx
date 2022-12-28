import { ReactNode } from "react";

function Chip({
  bg,
  color,
  text,
  small = false,
}: {
  bg?: string;
  color?: string;
  text: string | ReactNode;
  small?: boolean;
}) {
  return (
    <span
      style={{ color: color || "#343535" }}
      className={`${bg || "bg-[#F2F3F3]"} ${
        small ? "text-[10px]" : "text-xs"
      } font-semibold mr-2 mt-3 px-2.5 py-1.5 rounded-[5px] uppercase h-fit`}
    >
      {text}
    </span>
  );
}

export default Chip;
