import React from "react";
import CommentIcon from "../../../atoms/vectors/CommentIcon";
import LikeReactionIcon from "../../../atoms/vectors/LikeReactionIcon";
import RateIcon from "../../../atoms/vectors/RateIcon";
import ShopIcon from "../../../atoms/vectors/ShopIcon";
import Dropdown from "../../../molecules/Dropdown";
import {notifications} from "./NotificationList";
import "./notificationStyles.scss";
import Button from "../../../atoms/forms/Button/index";
import {useNavigate} from "react-router-dom";
import {Span} from "../../../atoms/Typography";
import MoreIcon from "../../../atoms/vectors/MoreIcon";

const NotificationDropdown = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[21.43rem] h-[32.25rem] flex flex-col pb-6 pt-3">
      <div className="flex items-center justify-between mx-4">
        <Span
          color="text-neutral07"
          twClasses="text-xl font-bold text-neutral07"
        >
          Notifications
        </Span>

        <MoreIcon className="cursor-pointer" />
      </div>
      <div className="mt-3 h-[80%] mb-6 overflow-auto ml-6 pr-4">
        <div>
          {notifications.map((note, noteIndex) => (
            <div key={`note-keys-${noteIndex}`} className="note-wrapper ">
              <div className=" w-12 h-12 rounded-full relative">
                <img src={note.userImgUrl} alt="profilepics" />
                <div className="absolute bottom-2 right-0 w-4 h-4 rounded-full">
                  {note.type === "comment" ? (
                    <CommentIcon />
                  ) : note.type === "like" ? (
                    <LikeReactionIcon />
                  ) : note.type === "shop" ? (
                    <ShopIcon />
                  ) : (
                    <RateIcon />
                  )}
                </div>
              </div>
              <div className=" ml-4 flex flex-col w-full">
                <div className="flex justify-between">
                  <div>
                    <span className="font-bold text-base text-neutral07">
                      {note.userDisplayName}
                    </span>
                    <span className="font-semibold text-[#9A9FA5]">
                      {note.userName}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#9A9FA5]">
                      {note.notificationTime}
                    </span>
                    {note.seen && (
                      <span className="w-2 h-2 rounded-full bg-primary3 ml-2"></span>
                    )}
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-base text-[#6F767E]">
                    {note.type === "comment"
                      ? "Comment on"
                      : note.type === "like"
                      ? "Likes"
                      : note.type === "shop"
                      ? "Purchsed"
                      : "Rate 5 star for"}
                  </span>
                  <span className="font-bold text-neutral07">
                    {" "}
                    Smile-3D icons
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full px-4">
        <Button
          className="w-full h-12 bg-primary01 rounded-xl text-neutral01 text-base font-semibold"
          onClick={() => navigate("/notifications")}
        >
          Show all notification
        </Button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
