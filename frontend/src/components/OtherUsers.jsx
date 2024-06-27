import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";
function OtherUsers() {
  //my custom hook
  useGetOtherUsers();
  const {OtherUsers} = useSelector(store=>store.user);
  if(!OtherUser) return; // early return 

  return (
      <div className="overflow-auto">
        {
          OtherUsers?.map((user)=>{
            return (
              <OtherUser key={user._id} user={user}/>
            )
          })
        }

      </div>
  );
}

export default OtherUsers;
