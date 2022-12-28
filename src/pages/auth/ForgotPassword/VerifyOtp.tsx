import React, { useState } from "react";
import Button from "../../../atoms/forms/Button";
import OtpInput from "./OtpInput";

type propTypes = {
  btnText: string;
  handleClick: Function;
};

const VerifyOtp = ({ btnText, handleClick = () => {} }: propTypes) => {
  const [otp, setOtp] = useState("");
  return (
    <div className="max-w-fit flex flex-col items-center ">
      <OtpInput value={otp} onChange={setOtp} />
      <Button
        background={`${!otp ? "bg-neutral600" : "bg-primary"}`}
        color={`${!otp ? "text-neutral500" : "text-white"}`}
        onClick={() => handleClick()}
      >
        {btnText}
      </Button>
    </div>
  );
};

export default VerifyOtp;
