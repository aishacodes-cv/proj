import {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Chip from "../../../../../atoms/Chip";
import "./style.scss";
import {TimeLoggerDropProps} from "../AddTagDropDown";
type TaskProps = {taskName: string; projectName: string};

function AutoComplete({
  suggestions,
  dropValue,
  onDropValueChange,
}: {suggestions: TaskProps[]} & TimeLoggerDropProps) {
  const [filteredSuggestions, setFilteredSuggestions] =
    useState<TaskProps[]>(suggestions);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion: TaskProps) =>
        suggestion.taskName.toLowerCase().indexOf(userInput.toLowerCase()) >
          -1 ||
        suggestion.projectName.toLowerCase().indexOf(userInput.toLowerCase()) >
          -1
    );
    onDropValueChange(e.target.value);
    setFilteredSuggestions(newFilteredSuggestions);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (val: string) => {
    setFilteredSuggestions([]);
    onDropValueChange(val);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  // remove drop down when clicking outside the component
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (showSuggestions && ref.current && !ref.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showSuggestions]);

  return (
    <div
      ref={ref}
      className="auto-complete w-full md:w-auto form-field h-[48px] flex-grow relative"
    >
      <div className="Input">
        <input
          type="text"
          className={`focus:outline-none placeholder-neutral bg-transparent w-full z-10 `}
          onChange={onChange}
          value={dropValue}
          placeholder="What are you working on?"
          onFocus={() => setShowSuggestions(true)}
        />
      </div>
      {showSuggestions && (
        <div className="drop-down w-full">
          <p className="text-cvCharcoal40 text-sm mb-2">
            Suggested tasks from projects
          </p>
          {filteredSuggestions.map((item, index) => {
            let className;
            if (index === activeSuggestionIndex) {
              className = "suggestion-active";
            }
            return (
              <div
                className="option"
                onClick={() =>
                  onClick(`${item.taskName} : ${item.projectName}`)
                }
              >
                <div className="flex space-x-2">
                  <div className="side-bar" />
                  <p className="font-semibold">{item.taskName}</p>
                </div>
                <Chip small text={item.projectName} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;
