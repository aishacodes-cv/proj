import Button from "../../../atoms/forms/Button";
import Switch from "../../../atoms/forms/Switch";

const Notifications = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 h-full w-full">
        <div className="col-span-3">
          <p className="text-xl font-semibold">
            Manage how you receive <br /> notifications
          </p>
        </div>
        <div className="flex flex-col space-y-[2.5rem] col-span-4">
          <div className="flex items-center">
            <div>
              <p className="font-medium text-[cvCharcoal]">
                Allow Desktop Notifications
              </p>
              <p className="text-sm font-normal text-[#676767]">
                If enabled members will be able to create multiple <br /> loans
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center">
            <div>
              <p className="font-medium text-[cvCharcoal]">
                Allow Email Notifications
              </p>
              <p className="text-sm font-normal text-[#676767]">
                If enabled members will be able to create multiple <br /> loans
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex gap-10">
            <div className="w-[11.1875rem]">
              <Button outlined>Cancel</Button>
            </div>

            <div className="w-[11.1875rem]">
              <Button>Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
