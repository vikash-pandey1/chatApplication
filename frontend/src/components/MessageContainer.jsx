import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";

function MessageContainer() {
  return (
    <div className="md:min-w-[550px] flex-col">
      <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2 rounded p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jAEnONxlpsGr8oF6yPHI9QHaHZ%26pid%3DApi%26h%3D160&f=1&ipt=79c84f516601ce27ceffb31651ecfe855842f99006ef9b6ac7c5be482c1e185a&ipo=images"
              alt="profile img"
            />
          </div>
        </div>
        <div className=" flex flex-col flex-1">
          <div className=" justify-between gap-2">
            <p>vikash</p>
          </div>
        </div>
      </div>
      <Messages/>
      <SendInput/>
    </div>
  );
}

export default MessageContainer;
