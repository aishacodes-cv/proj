import React, {DetailedHTMLProps, useState} from "react";

import "./Input.scss";

type propTypes = {
  label?: string;
  value?: string;
  password?: string;
} & DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type textAreaPropTypes = {
  label?: string;
  value?: string;
  height?: string;
} & DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const Input = ({label, value, password, ...props}: propTypes) => {
  const [isFocused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="Input">
      <label
        className={` ${
          isFocused || value?.trim()
            ? "-top-3  px-2 text-sm"
            : "top-3  text-base"
        }`}
      >
        {label}
      </label>
      <input
        value={value}
        {...props}
        type={showPassword ? "text" : props.type}
        className={`focus:outline-none placeholder-neutral bg-transparent w-full z-10 `}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {props.type == "password" && (
        <span
          className="cursor-pointer
         select-none font-light text-sm"
          onClick={() => setShowPassword(!showPassword)}
        >
          Show
        </span>
      )}
    </div>
  );
};

export default Input;

export const TextArea = ({
  label,
  value,
  height,
  ...props
}: textAreaPropTypes) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div className={`TextArea ${height ? height : "h-14"} `}>
      <label
        className={` ${
          isFocused || value?.trim()
            ? "-top-3  px-2 text-sm"
            : "top-1  text-base"
        }`}
      >
        {label}
      </label>
      <textarea
        value={value}
        className={`focus:outline-0 placeholder-neutral bg-transparent w-full z-10 resize-none pt-4 ${
          height ? height : "h-auto"
        }`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
    </div>
  );
};
