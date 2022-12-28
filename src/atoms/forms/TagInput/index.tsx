import React, {
  ChangeEvent,
  DetailedHTMLProps,
  Dispatch,
  KeyboardEvent,
  MutableRefObject,
  useRef,
  useState,
} from "react";
import IconButton from "../../../atoms/Button/IconButton";
import SquarePlus from "../../../atoms/vectors/SquarePlus";
import CloseIcon from "../../vectors/CloseIcon";
import "../Input/Input.scss";

type propTypes = {
  tags: string[];
  setTags: Dispatch<React.SetStateAction<string[]>>;
} & DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TagInput = ({tags, setTags, ...props}: propTypes) => {
  const [tempSkill, setTempSkill] = useState("");
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const addTag = () => {
    if (!tags.includes(tempSkill) && !!tempSkill.trim()) {
      setTags(prev => [...prev, tempSkill]);
    }
    setTempSkill("");
  };

  const deleteTag = (skill: string) => {
    let newTags = tags.filter(item => item !== skill);
    setTags([...newTags]);
  };

  return (
    <div className="relative w-full rounded-lg border h-fit px-4 tag-input">
      <div
        className="py-3 w-full h-fit"
        onClick={() => inputRef.current.focus()}
      >
        {tags.map((el, i) => (
          <div
            key={el + i}
            className="my-1 inline-flex space-x-2 items-center bg-[#F2F3F3] text-[10px] font-semibold mr-2 px-2.5 py-1.5 rounded-[5px] uppercase h-fit"
          >
            <span style={{color: "#343535"}} className={`text-primary`}>
              {el}
            </span>
            <span
              onClick={() => deleteTag(el)}
              className="cursor-pointer w-[10px] h-[10px] before"
            >
              <CloseIcon width={"100%"} height={"100%"} />
            </span>
          </div>
        ))}
        <input
          value={tempSkill}
          ref={inputRef}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTempSkill(e.target.value)
          }
          {...props}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
            e.key === "Enter" && e.ctrlKey && addTag()
          }
          type={"text"}
          className={`focus:outline-none placeholder-neutral bg-transparent z-10 w-[130px] my-1`}
        />
      </div>
      <IconButton
        className="absolute top-[50%] right-5 translate-y-[-50%] z-20 bg-white"
        type="button"
        icon={<SquarePlus />}
        onClick={() => addTag()}
      />
    </div>
  );
};

export default TagInput;
