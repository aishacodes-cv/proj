import React, {ChangeEvent, ReactNode, useState} from "react";
import CheckIcon from "../../vectors/CheckIcon";

type optionType = Array<string | {key: string | ReactNode; value: string}>;

function CheckBox({
  onSelect = () => {},
  selected = [],
  options,
  name,
  showLabel = true,
}: {
  onSelect?: Function;
  selectKey?: string;
  selected?: Array<number | string>;
  name: string;
  showLabel?: boolean;
  options: optionType;
  onChange?: Function;
}) {
  const toggleSelect = (id: number | string) => {
    if (!selected.includes(id)) onSelect([...selected, id]);
    else onSelect(selected.filter((item: number | string) => item !== id));
  };

  return (
    <>
      {options.map((option, optionIndex: number, key) => {
        let value = typeof option === "string" ? option : option.value;
        let label = typeof option === "string" ? option : option.key;
        return (
          <div
            key={`checkbox-${optionIndex}`}
            className="flex items-center my-2"
          >
            <label
              htmlFor={`${name}-checkbox-${optionIndex}`}
              className="flex items-center  cursor-pointer"
            >
              <input
                id={`${name}-checkbox-${optionIndex}`}
                type="checkbox"
                className="sr-only peer"
                value={value}
                checked={selected.includes(value) ? true : false}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  toggleSelect(value)
                }
              />
              <div className="checkbox h-4 w-4 border border-gray-300 rounded-[4px] bg-transparent peer-checked:bg-orange-500 peer-checked:border-orange-600 focus:outline-none flex items-center justify-center align-top mr-4 peer-disabled:bg-transparent peer-disabled:border-grey-300 peer-disabled:checked:border-grey-300">
                {selected.includes(value) && <CheckIcon />}
              </div>
              {showLabel && <p>{label}</p>}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default CheckBox;
