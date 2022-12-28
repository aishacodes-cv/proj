import { FormEvent, useEffect } from "react";
import { useRef, useState } from "react";
import { generateId } from "../../../utils/generateId";
import "./ForgotPassword.scss";

type Props = {
  size?: number;
  value?: String;
  onChange: (value: string) => void;
};

const inputArray = (length: number, val?: string) => Array(length).fill(val);

const OtpInput = ({ size = 4, onChange = () => {} }: Props) => {
  const [otp, setOtp] = useState<string[]>(inputArray(size, ""));

  const [inputId] = useState(inputArray(size, "").map((field) => generateId()));

  const otpInputs = inputArray(size).map(() => useRef(null));

  //@ts-ignore

  const inputFocus = (index: number) => otpInputs[index].current?.focus();

  const [isActive, setIsActive] = useState<number>(-1);

  useEffect(() => {
    onChange(otp.join(""));
  }, [otp]);

  const handleInputChange = (
    value: string,
    index: number,
    e: FormEvent<HTMLInputElement>
  ) => {
    const valueChecker = /\D/.test(value);

    setOtp(otp.map((ot, idx) => (idx === index && !valueChecker ? value : ot)));

    if (!valueChecker) {
      if (value && index !== otp.length - 1) {
        inputFocus(index + 1);
        setIsActive(isActive + 1);
      } else if (index === 0) {
        inputFocus(0);
      }
    }
  };

  const handleDelete = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (otp[index] && index === otp.length - 1) {
      inputFocus(index + 1);
    }

    if (e.code === "Backspace") {
      otp[index] = "";
      inputFocus(index - 1);
      setIsActive(isActive - 1);
    }
  };

  return (
    <div className="otp-wrapper">
      {inputId.map((id, index) => (
        <div
          key={`otp-wrapper-${id}-${index}`}
          className={`input-wrapper ${
            otp[index] ? "bg-cvGreen20" : "bg-white"
          } ${
            isActive === index
              ? "border-2 border-solid border-cvGreen100"
              : "border border-solid border-neutral600"
          }`}
        >
          <input
            key={`input-${id}-${index}`}
            className={`${isActive === index && "border-cvGreen100"} ${
              otp[index] ? "bg-cvGreen20" : "bg-white"
            } otp-input-wrapper`}
            maxLength={1}
            id={id}
            ref={otpInputs[index]}
            value={otp[index]}
            onKeyDown={(e) => handleDelete(e, index)}
            onChange={(e) => handleInputChange(e.target.value, index, e)}
            onFocus={() => setIsActive(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default OtpInput;
