import { useState } from "react";
import Button from "../../../atoms/forms/Button";
import Input from "../../../atoms/forms/Input";

type propTypes = {
  btnText: string;
  handleClick: Function;
};

const NewPassword = ({ btnText, handleClick = () => {} }: propTypes) => {
  const [formField, setFormField] = useState({ password: "", newPassword: "" });
  return (
    <div>
      <form
        action=""
        className="space-y-[2.1875rem] flex flex-col max-w-[23rem]"
      >
        <Input
          type="password"
          label="New password"
          value={formField.password}
          onChange={(e) =>
            setFormField({ ...formField, password: e.target.value })
          }
        />
        <Input
          type="password"
          label="Confirm Password"
          value={formField.newPassword}
          onChange={(e) =>
            setFormField({ ...formField, newPassword: e.target.value })
          }
        />
        <Button onClick={() => handleClick()}>{btnText}</Button>
      </form>
    </div>
  );
};

export default NewPassword;
