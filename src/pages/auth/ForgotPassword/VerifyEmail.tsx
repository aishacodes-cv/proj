import { useState } from "react";
import Button from "../../../atoms/forms/Button";
import Input from "../../../atoms/forms/Input";
import { H2 } from "../../../atoms/Typography";
import AuthLayout from "../../../templates/AuthLayout";
import { resetPasswordComponents } from "./resetPassword";

type propTypes = {
  btnText: string;
  handleClick: Function;
};

const VerifyEmail = ({ btnText, handleClick = () => {} }: propTypes) => {
  const [formField, setFormField] = useState({
    email: "",
  });

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <AuthLayout>
      <div className="flex flex-col px-[18rem] mt-[18.4375rem]">
        <H2>{resetPasswordComponents[currentTab].Title}</H2>
        <p className="text-skyBlue text-lg pb-12">
          {resetPasswordComponents[currentTab].description}
        </p>
        <form action="" className="space-y-8 flex flex-col">
          <Input
            type="email"
            label="Email Address"
            value={formField.email}
            onChange={(e) =>
              setFormField({ ...formField, email: e.target.value })
            }
          />
          <Button
            otherClasses={`${
              !formField.email
                ? "bg-neutral600 text-neutral500"
                : "bg-primary text-white"
            } `}
            onClick={() => handleClick()}
          >
            {btnText}
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;
