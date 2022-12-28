import {DetailedHTMLProps, ReactNode} from "react";

type Props = {
  icon: ReactNode;
  rounded?: boolean;
  otherClasses?: string;
} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
function IconButton({icon, rounded, otherClasses, ...props}: Props) {
  return (
    <button
      className={`p-2 transition ${
        rounded ? "rounded-full" : "rounded-[10px]"
      } text-center inline-flex justify-center items-center ${otherClasses}`}
      {...props}
    >
      {icon}
    </button>
  );
}

export default IconButton;
