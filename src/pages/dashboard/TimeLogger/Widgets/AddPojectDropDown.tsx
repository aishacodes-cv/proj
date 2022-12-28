import {ChangeEvent, useState} from "react";
import DropDownWrapper from "../../../../atoms/DropDownWrapper";
import SearchInput from "../../../../atoms/forms/SearchInput";
import CaretRightIcon from "../../../../atoms/vectors/CaretRightIcon";
import PlusIcon from "../../../../atoms/vectors/PlusIcon";
import ProjectIcon from "../../../../atoms/vectors/ProjectIcon";
import {COLORS} from "../../Projects";
import {generateRandomNum} from "../../Projects/index";
import {TimeLoggerDropProps} from "./AddTagDropDown";

const projects = ["Koprative", "School Management System", "CV-Online"];

function AddProjectDropDown({
  dropValue,
  onDropValueChange,
}: TimeLoggerDropProps) {
  const [filteredSuggestions, setFilteredSuggestions] =
    useState<string[]>(projects);
  const [input, setInput] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const newFilteredSuggestions = projects.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInput(e.target.value);
    setFilteredSuggestions(newFilteredSuggestions);
  };

  const onClick = (val: string) => {
    setFilteredSuggestions(projects);
    onDropValueChange(val);
    setInput("");
  };

  return (
    <DropDownWrapper
      otherClasses="drop-select-wrap w-full md:w-auto"
      action={
        <button type="button" className="drop-select w-full md:w-auto">
          <div className="drop-select_placeholder">
            <ProjectIcon />
            <input
              type="text"
              value={dropValue || "Add Project"}
              onChange={() => {}}
              disabled
            />
          </div>
          <CaretRightIcon
            color="#010202"
            style={{transform: "rotate(90deg)"}}
          />
        </button>
      }
    >
      <SearchInput
        onChange={onChange}
        value={input}
        placeholder="Search Projects"
        iconColor="#0D9E63"
      />
      <button
        onClick={() => onClick("No Project")}
        type="button"
        className="option"
      >
        <div>
          <span className="circle bg-[#C4C4C4]" />
          <p>No Project</p>
        </div>
      </button>
      {filteredSuggestions.map((el, i) => (
        <button
          type="button"
          key={el + i}
          onClick={() => onClick(el)}
          className="option"
        >
          <div>
            <span
              style={{
                backgroundColor:
                  COLORS[generateRandomNum(projects.length)] || COLORS[i],
              }}
              className="circle"
            />
            <p>{el}</p>
          </div>
        </button>
      ))}
      <button
        type="button"
        className="flex space-x-3 items-center justify-center text-primary mx-auto mt-3"
      >
        <PlusIcon color="#0D9E63" />{" "}
        <span className="text-base font-medium">Create a new project</span>
      </button>
    </DropDownWrapper>
  );
}

export default AddProjectDropDown;
