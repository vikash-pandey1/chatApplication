import React, { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

function SendInput() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8081/api/v1/message/send/${selectedUser?._id}`,
        { message },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(setMessages([...messages, res?.data?.newMessage]));
    } catch (error) {
      console.log(error);
    }
    setMessage("");
  };

  return (
    <form onSubmit={onSubmitHandler} className="px-4 my-3">
      <div className="w-full relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="send a message.."
          className="border text-md rounded-lg block w-full bg-gray-600 text-white p-3 border-zinc-500"
        />
        <button
          type="submit"
          className="absolute flex items-center inset-y-0 end-0 pr-4"
        >
          <IoSend />
        </button>
      </div>
    </form>
  );
}

export default SendInput;
