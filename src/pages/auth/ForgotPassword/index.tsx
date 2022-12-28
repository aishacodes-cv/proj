import React, { useState } from "react";
import Button from "../../../atoms/forms/Button";
import Input from "../../../atoms/forms/Input";
import { H1 } from "../../../atoms/Typography";
import NewPassword from "./CreateNewPassword";
import VerifyEmail from "./VerifyEmail";
import VerifyOtp from "./VerifyOtp";
import "./ForgotPassword.scss";
import Logo from "../../../atoms/vectors/Logo";
import { resetPasswordComponents } from "./resetPassword";

const ForgotPassword = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleClick = () => {
    if (currentTab >= 2) setCurrentTab(0);
    else setCurrentTab(currentTab + 1);
  };

  return (
    <div>
      {currentTab === 0 ? (
        <div>
          <VerifyEmail
            btnText={resetPasswordComponents[currentTab].buttonTitle}
            handleClick={handleClick}
          />
        </div>
      ) : (
        <div className="w-full h-screen overflow-hidden">
          <div className="pl-[4.6875rem] pt-[2.175rem]">
            <Logo />
          </div>
          <div className="mt-[14.83rem] flex flex-col items-center w-full">
            <div>
              <H1>{resetPasswordComponents[currentTab].Title}</H1>
              <p className="text-skyBlue text-lg">
                {resetPasswordComponents[currentTab].description}
              </p>
              <p className="text-lg font-normal mb-10">
                {resetPasswordComponents[currentTab].email}
              </p>
              {currentTab === 1 ? (
                <VerifyOtp
                  btnText={resetPasswordComponents[currentTab].buttonTitle}
                  handleClick={handleClick}
                />
              ) : (
                <NewPassword
                  btnText={resetPasswordComponents[currentTab].buttonTitle}
                  handleClick={handleClick}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
