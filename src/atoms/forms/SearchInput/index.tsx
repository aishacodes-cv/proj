import React, {DetailedHTMLProps} from "react";
import SearchIcon from "../../vectors/SearchIcon";

type propTypes = {
  placeholder?: string;
  iconColor?: string;
} & DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const SearchInput = ({
  placeholder = "Search",
  iconColor,
  ...props
}: propTypes) => {
  return (
    <div className="py-2 px-[0.75rem] w-[20.875rem] space-x-[0.75rem] flex items-center bg-white rounded-[20px] SearchInput">
      <SearchIcon color={iconColor} />
      <input
        type="text"
        placeholder={placeholder}
        {...props}
        className="flex-grow focus:outline-none min-w-[2rem]"
      />
    </div>
  );
};

export default SearchInput;
