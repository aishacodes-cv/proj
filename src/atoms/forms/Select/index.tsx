import React, {useState, DetailedHTMLProps} from "react";

import "./Select.scss";

type optionType = Array<string | {key: string; value: string}>;

type SelectProp = {
  label?: string;
  options: optionType;
  placeholder: string;
} & DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const Select = ({label, options, placeholder, ...props}: SelectProp) => {
  return (
    <div className="Select">
      <select {...props}>
        <option value="">{placeholder}</option>
        {options.map((option, optionIndex) => (
          <option
            value={typeof option === "string" ? option : option.key}
            key={`select_-option_${optionIndex}`}
          >
            {typeof option === "string" ? option : option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
