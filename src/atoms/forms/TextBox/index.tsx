import {TextareaHTMLAttributes, useState, DetailedHTMLProps} from "react";
import "../Input/Input.scss";

type Props = {
  label?: string;
  value?: string;
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const TextBox = ({label = "", value, required = true, ...props}: Props) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div className="Input textarea-wrap">
      {label && (
        <label
          className={` ${
            isFocused || value?.trim()
              ? "-top-3  px-2 text-sm"
              : "top-3  text-base"
          }`}
        >
          {label}
        </label>
      )}
      <textarea
        className="focus:outline-none min-h-[120px] placeholder-neutral bg-transparent w-full z-10 h-full"
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
    </div>
  );
};

export default TextBox;
