import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser, onlineUsers } = useSelector((store) => store.user);

  const isOnline = onlineUsers?.includes(user?._id);

  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    user?.fullName || "User"
  )}`;

  const profilePhoto = user?.profilePhoto || fallbackAvatar;

  const selectedUserHandler = () => {
    dispatch(setSelectedUser(user));
  };

  return (
    <>
      <div
        onClick={selectedUserHandler}
        className={`${
          selectedUser?._id === user?._id
            ? "bg-zinc-200 text-black"
            : "text-white"
        } flex gap-2 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer`}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img
              src={profilePhoto}
              alt="user-profile"
              onError={(e) => {
                e.target.src = fallbackAvatar;
              }}
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <p>{user?.fullName}</p>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default OtherUser;
