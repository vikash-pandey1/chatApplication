import React from "react";
import { IoSend } from "react-icons/io5";
function SendInput() {
  return (
    <from className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="send a message.."
          className="border text-md rounded-lg block w-full bg-gray-600 text-white p-3 border-zinc-500"
        />
        <button className="absolute flex items-center inset-y-0 end-0 pr-4">
          <IoSend />
        </button>
      </div>
    </from>
  );
}

export default SendInput;
