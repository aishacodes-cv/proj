import {ChangeEvent, KeyboardEvent, useState} from "react";
import DropDownWrapper from "../../../../atoms/DropDownWrapper";
import SearchInput from "../../../../atoms/forms/SearchInput";
import CaretRightIcon from "../../../../atoms/vectors/CaretRightIcon";
import TagIcon from "../../../../atoms/vectors/TagIcon";
import {COLORS, generateRandomNum} from "../../Projects";

export type TimeLoggerDropProps = {
  dropValue: string;
  onDropValueChange: (val: string) => void;
};

function AddTagDropDown({dropValue, onDropValueChange}: TimeLoggerDropProps) {
  const [tempSkill, setTempSkill] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const addTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.ctrlKey) {
      console.log(tempSkill);
      if (!tags.includes(tempSkill) && !!tempSkill.trim()) {
        setTags(prev => [...prev, tempSkill]);
        setFilteredSuggestions(prev => [...prev, tempSkill]);
      }
      setTempSkill("");
    }
  };

  const deleteTag = (skill: string) => {
    let newTags = tags.filter(item => item !== skill);
    setTags([...newTags]);
  };

  const [filteredSuggestions, setFilteredSuggestions] =
    useState<string[]>(tags);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const newFilteredSuggestions = tags.filter(
      tag =>
        tag.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
        tag.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setTempSkill(e.target.value);
    setFilteredSuggestions(newFilteredSuggestions);
  };

  const onClick = (val: string) => {
    setFilteredSuggestions(tags);
    onDropValueChange(val);
    setTempSkill("");
  };

  return (
    <DropDownWrapper
      otherClasses="drop-select-wrap w-full md:w-auto"
      action={
        <button type="button" className="drop-select w-full md:w-auto">
          <div className="drop-select_placeholder">
            <TagIcon />
            <input
              type="text"
              value={dropValue || "Add Tag"}
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
        value={tempSkill}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => addTag(e)}
        onChange={onChange}
        placeholder="Add/FIlter Tag"
        iconColor="#0D9E63"
      />
      {tags.length <= 0 ? (
        <>
          <p className="font-bold">No Tags Yet</p>
          <p className="text-sm mt-3 font-medium">
            Start typing and press Ctrl+Enter to create a new tag.
          </p>
        </>
      ) : (
        filteredSuggestions.map((el, i) => (
          <button
            onClick={() => onClick(el)}
            type="button"
            key={el + i}
            className="option"
          >
            <span
              style={{
                backgroundColor:
                  COLORS[generateRandomNum(tags.length)] || COLORS[i],
              }}
              className="circle"
            />
            <p>{el}</p>
          </button>
        ))
      )}
    </DropDownWrapper>
  );
}

export default AddTagDropDown;
