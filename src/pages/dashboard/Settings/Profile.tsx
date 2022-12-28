import {useState} from "react";
import Button from "../../../atoms/forms/Button";
import Input from "../../../atoms/forms/Input";
import Select from "../../../atoms/forms/Select";

const Profile = () => {
  const [formField, setFormField] = useState({
    fullName: "",
    email: "",
    number: "",
    displayName: "",
    role: "",
    size: "",
  });

  return (
    <div>
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 h-full w-full overflow-auto">
        <div className="col-span-3">
          <p className="text-xl font-medium">Edit your profile</p>
        </div>
        <div className="col-span-4">
          <form action="" className="space-y-[2.1875rem] flex flex-col">
            <Input
              type="text"
              label="Full name"
              value={formField.fullName}
              onChange={e =>
                setFormField({...formField, fullName: e.target.value})
              }
            />
            <Input
              type="text"
              label="Display Name"
              value={formField.displayName}
              onChange={e =>
                setFormField({...formField, displayName: e.target.value})
              }
            />
            <Input
              type="text"
              label="Role"
              value={formField.role}
              onChange={e => setFormField({...formField, role: e.target.value})}
            />
            <Input
              type="email"
              label="Email Address"
              value={formField.email}
              onChange={e =>
                setFormField({...formField, email: e.target.value})
              }
            />
            <Input
              type="number"
              label="Phone Number"
              value={formField.number}
              onChange={e =>
                setFormField({...formField, number: e.target.value})
              }
            />
            <Select
              placeholder="T-Shirt Size"
              label="Gender"
              options={[
                {key: "Female", value: "female"},
                {key: "Male", value: "male"},
              ]}
            />

            <div className="flex gap-x-10 mb-[8.6875rem]">
              <div className="w-[16.1875rem]">
                <Button outlined>Cancel</Button>
              </div>

              <div className="w-[16.1875rem]">
                <Button otherClasses="bg-primary">Save Changes</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
