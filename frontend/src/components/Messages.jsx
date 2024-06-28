import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";

function Messages() {
  useGetMessages();
  return (
    <div className="px-4  overflow-auto flex-1">
      <Message />


    </div>
  );
}

export default Messages;
