import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function useGetMessages() {
  const { selectedUser } = useSelector((store) => store.user);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8081/api/v1/message/${selectedUser?._id}`
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, []);
}

export default useGetMessages;
