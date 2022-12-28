import CaretRightIcon from "./vectors/CaretRightIcon";
import {useNavigate} from "react-router-dom";
import {DetailedHTMLProps} from "react";

function BackBtnFilled({
  className = "",
  ...props
}: {className?: string} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  const navigate = useNavigate();

  return (
    <button
      {...props}
      onClick={() => navigate(-1)}
      className={`bg-white rounded-lg px-5 py-2 font-semibold items-center text-sm top-center flex space-x-3 ${className}`}
    >
      <CaretRightIcon color="black" className="scale-75 rotate-180" />
      <span className="hidden md:block">Back</span>
    </button>
  );
}

export default BackBtnFilled;
