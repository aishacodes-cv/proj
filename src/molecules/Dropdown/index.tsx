import { ReactElement, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/forms/Button";
import { Span } from "../../atoms/Typography";
import MoreIcon from "../../atoms/vectors/MoreIcon";
import {
  setShowNotification,
  showNotification,
} from "../../pages/dashboard/Notification/notification.entity";
import { useClickAway } from "react-use";
import "./dropDownStyles.scss";

type Props = {
  title: string;
  children: ReactElement;
  more?: boolean;
  cta?: string;
};

const Dropdown = ({ title, children, more, cta }: Props) => {
  const showNotifications = showNotification.use();
  const navigate = useNavigate();
  const clickRef = useRef(null);

  useClickAway(clickRef, () => {
    setShowNotification(false);
  });

  const showAllNotifications = () => {
    setShowNotification(false);
    navigate("/notifications");
  };

  return (
    <div
      ref={clickRef}
      className={`${
        showNotifications ? "visible" : "invisible"
      } dropdown-wrapper`}
    >
      <div className="flex items-center justify-between mx-4">
        <Span
          color="text-neutral07"
          twClasses="text-xl font-bold text-neutral07"
        >
          {title}
        </Span>
        {more && <MoreIcon className="cursor-pointer" />}
      </div>
      <div className="mt-3 h-[80%] mb-6 overflow-auto ml-6 pr-4">
        {children}
      </div>
      {cta && (
        <div className="w-full px-4">
          <Button
            className="w-full h-12 bg-primary01 rounded-xl text-neutral01 text-base font-semibold"
            onClick={showAllNotifications}
          >
            {cta}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
