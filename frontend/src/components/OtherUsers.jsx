import React from "react";

function OtherUsers() {
  return (
      <div>
        <div className="flex gap-2 items-center">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jAEnONxlpsGr8oF6yPHI9QHaHZ%26pid%3DApi%26h%3D160&f=1&ipt=79c84f516601ce27ceffb31651ecfe855842f99006ef9b6ac7c5be482c1e185a&ipo=images"
                alt="profile img"
              />
            </div>
          </div>
          <div className=" flex flex-col flex-1">
            <div className="flex items-center justify-between gap-2">
              <p>vikash</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default OtherUsers;
