import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

function useGetMessages() {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8081/api/v1/message/${selectedUser?._id}`
        );
        console.log(res);
        dispatch(setMessages(res.data))
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [selectedUser]);
}

export default useGetMessages;
