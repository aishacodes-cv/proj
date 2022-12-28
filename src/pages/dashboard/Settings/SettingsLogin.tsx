import {useState} from "react";
import Button from "../../../atoms/forms/Button";
import Input from "../../../atoms/forms/Input";

const SettingsLogin = () => {
  const [formField, setFormField] = useState({
    password: "",
    newPassword: "",
    newPasswordAgain: "",
  });

  return (
    <div>
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 h-full w-full">
        <div className="col-span-3">
          <p className="text-xl font-medium">Change Your Password</p>
        </div>
        <div className="col-span-4">
          <form action="" className="space-y-[2.1875rem] flex flex-col">
            <Input
              type="password"
              label="Current Password"
              value={formField.password}
              onChange={e =>
                setFormField({...formField, password: e.target.value})
              }
            />
            <Input
              type="password"
              label="New Password"
              value={formField.newPassword}
              onChange={e =>
                setFormField({...formField, newPassword: e.target.value})
              }
            />
            <Input
              type="password"
              label="New Password Again"
              value={formField.newPasswordAgain}
              onChange={e =>
                setFormField({...formField, newPasswordAgain: e.target.value})
              }
            />
            <div className="flex gap-10 items-center">
              <div className="w-[16.1875rem]">
                <Button outlined>Cancel</Button>
              </div>

              <div className="w-[16.1875rem]">
                <Button>Save Changes</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsLogin;
